import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FilterPropertiesDto } from './dto/filter-properties.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertiesRepository: Repository<Property>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const property = this.propertiesRepository.create(createPropertyDto);
    return this.propertiesRepository.save(property);
  }

  async findAll(filterDto: FilterPropertiesDto): Promise<Property[]> {
    const { minPrice, maxPrice, type } = filterDto;

    const queryBuilder =
      this.propertiesRepository.createQueryBuilder('property');

    if (minPrice !== undefined) {
      queryBuilder.andWhere('property.price >= :minPrice', { minPrice });
    }

    if (maxPrice !== undefined) {
      queryBuilder.andWhere('property.price <= :maxPrice', { maxPrice });
    }

    if (type !== undefined) {
      queryBuilder.andWhere('property.type = :type', { type });
    }

    return queryBuilder.orderBy('property.createdAt', 'DESC').getMany();
  }

  async findOne(id: string): Promise<Property> {
    const property = await this.propertiesRepository.findOne({ where: { id } });

    if (!property) {
      throw new NotFoundException(`Imóvel com ID ${id} não encontrado`);
    }

    return property;
  }

  async update(
    id: string,
    updatePropertyDto: UpdatePropertyDto,
  ): Promise<Property> {
    const property = await this.findOne(id);

    Object.assign(property, updatePropertyDto);

    return this.propertiesRepository.save(property);
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.propertiesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Imóvel com ID ${id} não encontrado`);
    }
    return { message: 'Imóvel removido com sucesso' };
  }
}
