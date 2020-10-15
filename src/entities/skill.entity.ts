import { SkillExperience } from 'src/modules/skill/enums/skill-experience.enum copy';
import { SkillType } from 'src/modules/skill/enums/skill-type.enum';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'skill' })
export class Skill extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'skill_id' })
  id: number;

  @Column({ type: 'enum', enum: SkillType })
  type: SkillType;

  @Column({ type: 'varchar', length: 250 })
  name: string;

  @Column({ type: 'enum', enum: SkillExperience })
  experience: SkillExperience;
}
