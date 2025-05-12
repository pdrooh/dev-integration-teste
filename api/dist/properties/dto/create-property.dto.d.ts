import { PropertyType } from '../entities/property.entity';
export declare class CreatePropertyDto {
    title: string;
    description: string;
    address: string;
    price: number;
    type: PropertyType;
}
