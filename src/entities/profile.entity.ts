import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'profile' })
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'profile_id' })
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  firstname: string;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  lastname: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  @ApiPropertyOptional()
  statement: string;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  city: string;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  country: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiPropertyOptional()
  github: string;
}
