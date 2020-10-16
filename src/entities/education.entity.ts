import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'education' })
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'education_id' })
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  @ApiProperty()
  institute: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @ApiPropertyOptional()
  subInstitute: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @ApiPropertyOptional()
  degree: string;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  city: string;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  country: string;

  @Column({ type: 'timestamptz' })
  @ApiProperty()
  startedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  @ApiPropertyOptional()
  endedAt: Date;

  @Column({ type: 'numeric', scale: 2, precision: 16 })
  @ApiProperty()
  gpa: string;

  @Column({ type: 'numeric', scale: 2, precision: 16 })
  @ApiProperty()
  maxGpa: string;
}
