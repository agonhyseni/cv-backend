import { Controller, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Education } from 'src/entities/education.entity';
import { EducationService } from './education.service';

@ApiTags('Educations')
@Controller()
export class EducationController {
  constructor(private educationService: EducationService) {}

  @ApiOperation({ summary: 'Get list of educations' })
  @Get('educations')
  async getEducations(): Promise<{ educations: Education[] }> {
    const educations = await this.educationService.getAll();
    return { educations };
  }

  @ApiOperation({ summary: 'Get education by id' })
  @Get('educations/:id')
  async getEducation(
    @Param('id') id: number,
  ): Promise<{ education: Education }> {
    const education = await this.educationService.getById(id);
    return { education };
  }
}
