import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { PropertyType } from '../entities/property.entity';
import { Type } from 'class-transformer';

export class FilterPropertiesDto {
  @ApiProperty({
    description: 'Preço mínimo',
    required: false,
    example: 100000,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'O preço mínimo deve ser um número' })
  @Min(0, { message: 'O preço mínimo deve ser maior ou igual a zero' })
  minPrice?: number;

  @ApiProperty({
    description: 'Preço máximo',
    required: false,
    example: 500000,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'O preço máximo deve ser um número' })
  @Min(0, { message: 'O preço máximo deve ser maior ou igual a zero' })
  maxPrice?: number;

  @ApiProperty({
    description: 'Tipo do imóvel',
    enum: PropertyType,
    required: false,
    example: PropertyType.APARTMENT,
  })
  @IsOptional()
  @IsEnum(PropertyType, { message: 'Tipo de imóvel inválido' })
  type?: PropertyType;
}
