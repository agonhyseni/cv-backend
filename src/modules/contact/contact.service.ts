import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientResponse } from '@sendgrid/client/src/response';
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

  async sendEmail(sendEmailDto: SendEmailDto): Promise<[ClientResponse, any]> {
    const response = await this.sgMail.send({
      ...sendEmailDto,
      from: 'hyseniagon@gmail.com',
      to: 'hyseniagon@gmail.com',
    });
    return response;
  }
}
