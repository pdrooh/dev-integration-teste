import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { PropertyType } from '../entities/property.entity';

export class CreatePropertyDto {
  @ApiProperty({
    description: 'Título do imóvel',
    example: 'Casa em Condomínio',
  })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @IsString({ message: 'O título deve ser uma string' })
  title: string;

  @ApiProperty({
    description: 'Descrição do imóvel',
    example: 'Casa ampla com 3 quartos e piscina',
  })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @IsString({ message: 'A descrição deve ser uma string' })
  description: string;

  @ApiProperty({
    description: 'Endereço do imóvel',
    example: 'Rua das Flores, 123',
  })
  @IsNotEmpty({ message: 'O endereço é obrigatório' })
  @IsString({ message: 'O endereço deve ser uma string' })
  address: string;

  @ApiProperty({ description: 'Preço do imóvel', example: 350000 })
  @IsNotEmpty({ message: 'O preço é obrigatório' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  @Min(0, { message: 'O preço deve ser maior ou igual a zero' })
  price: number;

  @ApiProperty({
    description: 'Tipo do imóvel',
    enum: PropertyType,
    example: PropertyType.HOME,
  })
  @IsNotEmpty({ message: 'O tipo é obrigatório' })
  @IsEnum(PropertyType, { message: 'Tipo de imóvel inválido' })
  type: PropertyType;
}
