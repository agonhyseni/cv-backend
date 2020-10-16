import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from 'src/entities/contact.entity';
import { ContactService } from './contact.service';
import { SendEmailDto } from './dto/send-email-dto';

@ApiTags('Contact')
@Controller()
export class ContactController {
  constructor(private contactService: ContactService) {}

  @ApiOperation({ summary: 'Get contact info' })
  @ApiResponse({ status: 200, description: 'Contact found', type: Contact })
  @ApiResponse({ status: 404, description: 'Contact not found' })
  @Get('contact')
  async getContacts(): Promise<{ contact: Contact }> {
    const contact = await this.contactService.getMe();
    return { contact };
  }

  @ApiOperation({ summary: 'Contact me' })
  @ApiResponse({ status: 200, description: 'Email sent' })
  @ApiResponse({ status: 403, description: 'No permission' })
  @Post('contact/me')
  async createContacts(
    @Body(ValidationPipe) sendEmailDto: SendEmailDto,
  ): Promise<void> {
    await this.contactService.sendEmail(sendEmailDto);
  }
}
