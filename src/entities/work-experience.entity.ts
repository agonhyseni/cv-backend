import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'work_experience' })
export class WorkExperience extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'work_experience_id' })
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  position: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiPropertyOptional()
  description: string;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  company: string;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  city: string;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  country: string;

  @Column({ type: 'varchar', array: true, default: [] })
  @ApiPropertyOptional()
  projects: string[];

  @Column({ type: 'timestamptz' })
  @ApiProperty()
  startedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  @ApiPropertyOptional()
  endedAt: Date;
}
