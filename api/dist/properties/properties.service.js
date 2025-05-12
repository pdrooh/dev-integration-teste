"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_entity_1 = require("./entities/property.entity");
let PropertiesService = class PropertiesService {
    propertiesRepository;
    constructor(propertiesRepository) {
        this.propertiesRepository = propertiesRepository;
    }
    async create(createPropertyDto) {
        const property = this.propertiesRepository.create(createPropertyDto);
        return this.propertiesRepository.save(property);
    }
    async findAll(filterDto) {
        const { minPrice, maxPrice, type } = filterDto;
        const queryBuilder = this.propertiesRepository.createQueryBuilder('property');
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
    async findOne(id) {
        const property = await this.propertiesRepository.findOne({ where: { id } });
        if (!property) {
            throw new common_1.NotFoundException(`Imóvel com ID ${id} não encontrado`);
        }
        return property;
    }
    async update(id, updatePropertyDto) {
        const property = await this.findOne(id);
        Object.assign(property, updatePropertyDto);
        return this.propertiesRepository.save(property);
    }
    async remove(id) {
        const result = await this.propertiesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Imóvel com ID ${id} não encontrado`);
        }
    }
};
exports.PropertiesService = PropertiesService;
exports.PropertiesService = PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(property_entity_1.Property)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PropertiesService);
//# sourceMappingURL=properties.service.js.map