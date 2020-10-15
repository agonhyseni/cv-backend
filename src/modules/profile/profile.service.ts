import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  async getAll(): Promise<Profile[]> {
    const educations = await this.profileRepository.find();
    return educations;
  }

  async getById(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne(id);

    if (!profile) {
      throw new NotFoundException(
        'Profile with the provided id was not found.',
      );
    }

    return profile;
  }
}
