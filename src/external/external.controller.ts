import { Body, Controller, Post } from '@nestjs/common';
import { ExternalService } from './external.service';

@Controller('external')
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}

  @Post('test')
  test(@Body() body: any) {
    console.log(body);
    return body;
  }
}
