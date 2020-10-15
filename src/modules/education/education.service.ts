import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from 'src/entities/education.entity';
import { EducationRepository } from './education.repository';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(EducationRepository)
    private educationRepository: EducationRepository,
  ) {}

  async getAll(): Promise<Education[]> {
    const educations = await this.educationRepository.find();
    return educations;
  }

  async getById(id: number): Promise<Education> {
    const education = await this.educationRepository.findOne(id);

    if (!education) {
      throw new NotFoundException(
        'Education with the provided id was not found.',
      );
    }

    return education;
  }
}
