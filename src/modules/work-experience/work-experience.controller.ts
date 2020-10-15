import { Controller, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WorkExperience } from 'src/entities/work-experience.entity';
import { WorkExperienceService } from './work-experience.service';

@ApiTags('Work Experiences')
@Controller()
export class WorkExperienceController {
  constructor(private workExperienceService: WorkExperienceService) {}

  @ApiOperation({ summary: 'Get list of work experiences' })
  @Get('work-experiences')
  async getWorkExperiences(): Promise<{ workExperiences: WorkExperience[] }> {
    const workExperiences = await this.workExperienceService.getAll();
    return { workExperiences };
  }

  @ApiOperation({ summary: 'Get work experience by id' })
  @Get('work-experiences/:id')
  async getWorkExperience(
    @Param('id') id: number,
  ): Promise<{ workExperience: WorkExperience }> {
    const workExperience = await this.workExperienceService.getById(id);
    return { workExperience };
  }
}
