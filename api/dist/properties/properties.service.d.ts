import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FilterPropertiesDto } from './dto/filter-properties.dto';
export declare class PropertiesService {
    private propertiesRepository;
    constructor(propertiesRepository: Repository<Property>);
    create(createPropertyDto: CreatePropertyDto): Promise<Property>;
    findAll(filterDto: FilterPropertiesDto): Promise<Property[]>;
    findOne(id: string): Promise<Property>;
    update(id: string, updatePropertyDto: UpdatePropertyDto): Promise<Property>;
    remove(id: string): Promise<void>;
}
