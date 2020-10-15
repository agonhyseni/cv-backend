import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkExperienceController } from './work-experience.controller';
import { WorkExperienceRepository } from './work-experience.repository';
import { WorkExperienceService } from './work-experience.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkExperienceRepository])],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService],
})
export class WorkExperienceModule {}
