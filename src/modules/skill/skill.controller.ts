import { Controller, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Skill } from 'src/entities/skill.entity';
import { SkillType } from './enums/skill-type.enum';
import { SkillService } from './skill.service';

@ApiTags('Skills')
@Controller()
export class SkillController {
  constructor(private skillService: SkillService) {}

  @ApiOperation({ summary: 'Get list of skills' })
  @ApiResponse({
    status: 200,
    description: 'Skills found',
    type: [Skill],
  })
  @Get('skills')
  async getSkills(): Promise<{ skills: Skill[] }> {
    const skills = await this.skillService.getAll();
    return { skills };
  }

  @ApiOperation({ summary: 'Get skill by id' })
  @ApiResponse({ status: 200, description: 'Skill found', type: Skill })
  @ApiResponse({ status: 404, description: 'Skill not found' })
  @Get('skills/:id')
  async getSkill(@Param('id') id: number): Promise<{ skill: Skill }> {
    const skill = await this.skillService.getById(id);
    return { skill };
  }

  @ApiOperation({ summary: 'Get language skills' })
  @ApiResponse({
    status: 200,
    description: 'Language skills found',
    type: [Skill],
  })
  @Get('language-skills')
  async getLangugeSkill(): Promise<{ languageSkills: Skill[] }> {
    const languageSkills = await this.skillService.getByType(
      SkillType.LANGUAGE,
    );
    return { languageSkills };
  }

  @ApiOperation({ summary: 'Get programming skills' })
  @ApiResponse({
    status: 200,
    description: 'Programming skills found',
    type: [Skill],
  })
  @Get('programming-skills')
  async getProgrammingSkill(): Promise<{ programmingSkills: Skill[] }> {
    const programmingSkills = await this.skillService.getByType(
      SkillType.PROGRAMMING,
    );
    return { programmingSkills };
  }
}
