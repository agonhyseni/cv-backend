import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'education' })
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'education_id' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  institute: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  subInstitute: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  degree: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'timestamptz' })
  startedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  endedAt: Date;

  @Column({ type: 'numeric', scale: 2, precision: 16, nullable: true })
  gpa: string;

  @Column({ type: 'numeric', scale: 2, precision: 16, nullable: true })
  maxGpa: string;
}
