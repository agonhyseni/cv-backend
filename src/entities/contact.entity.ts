import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'contact' })
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'contact_id' })
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty()
  email: string;

  @Column({ type: 'varchar', length: 20 })
  @ApiProperty()
  phone: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiPropertyOptional()
  linkedin: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiPropertyOptional()
  facebook: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiPropertyOptional()
  instagram: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiPropertyOptional()
  twitter: string;
}
