import { ApiProperty } from '@nestjs/swagger';
import { SkillExperience } from 'src/modules/skill/enums/skill-experience.enum';
import { SkillType } from 'src/modules/skill/enums/skill-type.enum';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'skill' })
export class Skill extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'skill_id' })
  @ApiProperty()
  id: number;

  @Column({ type: 'enum', enum: SkillType })
  @ApiProperty()
  type: SkillType;

  @Column({ type: 'varchar', length: 250 })
  @ApiProperty()
  name: string;

  @Column({ type: 'enum', enum: SkillExperience })
  @ApiProperty()
  experience: SkillExperience;
}
