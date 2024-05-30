import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './messageDto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/message')
  async CheckEmail(@Body() message: MessageDto, @Res() response: Response) {
    const isEmailSent = await this.appService.sendEmail(message);

    if (isEmailSent) {
      return response.status(200).json();
    }

    throw new HttpException(
      'mail failed to be sent',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
