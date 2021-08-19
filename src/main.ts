import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  // app.setGlobalPrefix('v1');
  app.setGlobalPrefix('v1', { exclude: ['external/([^\\s]+)'] });

  await app.listen(3000);
}
bootstrap();
