import { Controller, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WorkExperience } from 'src/entities/work-experience.entity';
import { WorkExperienceService } from './work-experience.service';

@ApiTags('Work Experiences')
@Controller()
export class WorkExperienceController {
  constructor(private workExperienceService: WorkExperienceService) {}

  @ApiOperation({ summary: 'Get list of work experiences' })
  @ApiResponse({
    status: 200,
    description: 'Work experiences found',
    type: [WorkExperience],
  })
  @Get('work-experiences')
  async getWorkExperiences(): Promise<{ workExperiences: WorkExperience[] }> {
    const workExperiences = await this.workExperienceService.getAll();
    return { workExperiences };
  }

  @ApiOperation({ summary: 'Get work experience by id' })
  @ApiResponse({
    status: 200,
    description: 'Work experience found',
    type: WorkExperience,
  })
  @ApiResponse({ status: 404, description: 'Work experience not found' })
  @Get('work-experiences/:id')
  async getWorkExperience(
    @Param('id') id: number,
  ): Promise<{ workExperience: WorkExperience }> {
    const workExperience = await this.workExperienceService.getById(id);
    return { workExperience };
  }
}
