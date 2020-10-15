import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillController } from './skill.controller';
import { SkillRepository } from './skill.repository';
import { SkillService } from './skill.service';

@Module({
  imports: [TypeOrmModule.forFeature([SkillRepository])],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
