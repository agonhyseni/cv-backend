import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkExperience } from 'src/entities/work-experience.entity';
import { WorkExperienceRepository } from './work-experience.repository';

@Injectable()
export class WorkExperienceService {
  constructor(
    @InjectRepository(WorkExperienceRepository)
    private workExperienceRepository: WorkExperienceRepository,
  ) {}

  async getAll(): Promise<WorkExperience[]> {
    const workExperiences = await this.workExperienceRepository.find();
    return workExperiences;
  }

  async getById(id: number): Promise<WorkExperience> {
    const workExperience = await this.workExperienceRepository.findOne(id);

    if (!workExperience) {
      throw new NotFoundException(
        'Work experience with the provided id was not found.',
      );
    }

    return workExperience;
  }
}
