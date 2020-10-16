import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Contact } from 'src/entities/contact.entity';
import { ContactService } from './contact.service';
import { SendEmailDto } from './dto/send-email-dto';

@ApiTags('Contact')
@Controller()
export class ContactController {
  constructor(private contactService: ContactService) {}

  @ApiOperation({ summary: 'Get contact info' })
  @Get('contact')
  async getContacts(): Promise<{ contact: Contact }> {
    const contact = await this.contactService.getMe();
    return { contact };
  }

  @ApiOperation({ summary: 'Contact me' })
  @Post('contact/me')
  async createContacts(
    @Body(ValidationPipe) sendEmailDto: SendEmailDto,
  ): Promise<void> {
    const response = await this.contactService.sendEmail(sendEmailDto);
    console.log(response);
  }
}
