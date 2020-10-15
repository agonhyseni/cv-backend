import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'work_experience' })
export class WorkExperience extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'work_experience_id' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  position: string;

  @Column({ type: 'varchar', length: 250 })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  company: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  @Column({ type: 'varchar', length: 100 })
  country: string;

  @Column({ type: 'varchar', array: true })
  projects: string[];

  @Column({ type: 'timestamptz' })
  startedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  endedAt: Date;
}
