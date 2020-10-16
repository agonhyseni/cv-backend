import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity({ name: 'contact' })
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'contact_id' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'varchar', length: 250 })
  linkedin: string;

  @Column({ type: 'varchar', length: 250 })
  facebook: string;

  @Column({ type: 'varchar', length: 250 })
  instagram: string;

  @Column({ type: 'varchar', length: 250 })
  twitter: string;
}
