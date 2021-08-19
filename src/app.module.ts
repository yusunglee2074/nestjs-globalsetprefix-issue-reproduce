import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { json, urlencoded } from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalModule } from './external/external.module';

@Module({
  imports: [ExternalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const webhookRoute = {
      method: RequestMethod.ALL,
      path: 'v1/orders/webhook',
    };
    consumer
      .apply(json(), urlencoded({ extended: true }))
      .exclude(webhookRoute)
      .forRoutes('*');
  }
}
