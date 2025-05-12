import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum PropertyType {
  HOME = 'HOME',
  APARTMENT = 'APARTMENT',
  KITNET = 'KITNET',
}

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({
    type: 'enum',
    enum: PropertyType,
    default: PropertyType.HOME,
  })
  type: PropertyType;

  @CreateDateColumn()
  createdAt: Date;
}
