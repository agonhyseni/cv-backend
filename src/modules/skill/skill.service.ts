import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from 'src/entities/skill.entity';
import { SkillType } from './enums/skill-type.enum';
import { SkillRepository } from './skill.repository';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(SkillRepository)
    private skillRepository: SkillRepository,
  ) {}

  async getAll(): Promise<Skill[]> {
    const skills = await this.skillRepository.find();
    return skills;
  }

  async getById(id: number): Promise<Skill> {
    const skill = await this.skillRepository.findOne(id);

    if (!skill) {
      throw new NotFoundException('Skill with the provided id was not found.');
    }

    return skill;
  }

  async getByType(type: SkillType): Promise<Skill[]> {
    const skills = await this.skillRepository.find({
      type,
    });
    return skills;
  }
}
