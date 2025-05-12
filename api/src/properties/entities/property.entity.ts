import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum PropertyType {
  HOME = 'HOME',
  APARTMENT = 'APARTMENT',
  KITNET = 'KITNET',
}

@Entity('properties')
export class Property {
  @ApiProperty({
    description: 'ID único do imóvel',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Título do imóvel',
    example: 'Casa em Condomínio',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Descrição do imóvel',
    example: 'Casa ampla com 3 quartos e piscina',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Endereço do imóvel',
    example: 'Rua das Flores, 123',
  })
  @Column()
  address: string;

  @ApiProperty({ description: 'Preço do imóvel', example: 350000 })
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty({
    description: 'Tipo do imóvel',
    enum: PropertyType,
    example: PropertyType.HOME,
  })
  @Column({
    type: 'enum',
    enum: PropertyType,
    default: PropertyType.HOME,
  })
  type: PropertyType;

  @ApiProperty({
    description: 'Data de criação do registro',
    example: '2023-01-01T00:00:00Z',
  })
  @CreateDateColumn()
  createdAt: Date;
}
