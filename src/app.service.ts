import { Injectable } from '@nestjs/common';
import { MessageDto } from './messageDto';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private nodeMailerService: MailerService) {}

  async sendEmail({ email, text }: MessageDto) {
    const mailOptions: ISendMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'I saw your angular portfolio',
      // text: text,
      html: `<br/><p>${text}</p><br/><br/><h3>Contactes moi: ${email}</h3>`,
    };

    return this.nodeMailerService
      .sendMail(mailOptions)
      .then(() => true)
      .catch(() => false);
  }
}
