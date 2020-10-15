import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationController } from './education.controller';
import { EducationRepository } from './education.repository';
import { EducationService } from './education.service';

@Module({
  imports: [TypeOrmModule.forFeature([EducationRepository])],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
