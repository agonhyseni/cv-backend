import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SendEmailDto {
  @ApiProperty({ description: 'Subject of the email' })
  @IsString()
  subject: string;

  @ApiProperty({ description: 'Text of the email' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'Your email address' })
  @IsString()
  @IsEmail()
  from: string;
}
