import { IsEmail, IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  text: string;
}
