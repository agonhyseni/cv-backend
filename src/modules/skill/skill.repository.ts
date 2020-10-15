import { EntityRepository, Repository } from 'typeorm';
import { Skill } from '../../entities/skill.entity';

@EntityRepository(Skill)
export class SkillRepository extends Repository<Skill> {}
