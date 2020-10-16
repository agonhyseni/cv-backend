import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendGridModule } from '@ntegral/nestjs-sendgrid';
import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { ContactService } from './contact.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactRepository]),
    SendGridModule.forRoot({
      apiKey: process.env.SENDGRID_KEY,
    }),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
