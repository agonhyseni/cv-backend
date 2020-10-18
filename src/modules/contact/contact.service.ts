import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { ContactRepository } from './contact.repository';
import { SendEmailDto } from './dto/send-email-dto';
import { InjectSendGrid, SendGridService } from '@ntegral/nestjs-sendgrid';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactRepository)
    private contactRepository: ContactRepository,
    @InjectSendGrid() private readonly sgMail: SendGridService,
  ) {}

  async getMe(): Promise<Contact> {
    const contact = await this.contactRepository.findOne(1);

    if (!contact) {
      throw new NotFoundException('Contact was not found.');
    }

    return contact;
  }

  async sendEmail(sendEmailDto: SendEmailDto): Promise<void> {
    await this.sgMail.send({
      subject: sendEmailDto.subject,
      text: `${sendEmailDto.text} FROM:${sendEmailDto.from}`,
      from: process.env.SENDGRID_EMAIL,
      to: process.env.SENDGRID_EMAIL,
    });

    await this.sgMail.send({
      subject: `Email sent to: ${process.env.SENDGRID_EMAIL}`,
      text: `
        Hello,
        
        Hope you are staying positive and testing negative!
        
        Thank you for contacting me! I will come back to you as soon as possible. 

        Kind regards,

        ${process.env.FIRSTNAME} ${process.env.LASTNAME}`,
      from: process.env.SENDGRID_EMAIL,
      to: sendEmailDto.from,
    });
  }
}
