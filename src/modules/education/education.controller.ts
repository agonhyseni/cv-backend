import { Controller, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Education } from 'src/entities/education.entity';
import { EducationService } from './education.service';

@ApiTags('Educations')
@Controller()
export class EducationController {
  constructor(private educationService: EducationService) {}

  @ApiOperation({ summary: 'Get list of educations' })
  @ApiResponse({
    status: 200,
    description: 'Educations found',
    type: [Education],
  })
  @Get('educations')
  async getEducations(): Promise<{ educations: Education[] }> {
    const educations = await this.educationService.getAll();
    return { educations };
  }

  @ApiOperation({ summary: 'Get education by id' })
  @ApiResponse({ status: 200, description: 'Education found', type: Education })
  @ApiResponse({ status: 404, description: 'Education not found' })
  @Get('educations/:id')
  async getEducation(
    @Param('id') id: number,
  ): Promise<{ education: Education }> {
    const education = await this.educationService.getById(id);
    return { education };
  }
}
