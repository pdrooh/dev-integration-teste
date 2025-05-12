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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterPropertiesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const property_entity_1 = require("../entities/property.entity");
const class_transformer_1 = require("class-transformer");
class FilterPropertiesDto {
    minPrice;
    maxPrice;
    type;
}
exports.FilterPropertiesDto = FilterPropertiesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preço mínimo',
        required: false,
        example: 100000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'O preço mínimo deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'O preço mínimo deve ser maior ou igual a zero' }),
    __metadata("design:type", Number)
], FilterPropertiesDto.prototype, "minPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preço máximo',
        required: false,
        example: 500000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'O preço máximo deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'O preço máximo deve ser maior ou igual a zero' }),
    __metadata("design:type", Number)
], FilterPropertiesDto.prototype, "maxPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo do imóvel',
        enum: property_entity_1.PropertyType,
        required: false,
        example: property_entity_1.PropertyType.APARTMENT,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(property_entity_1.PropertyType, { message: 'Tipo de imóvel inválido' }),
    __metadata("design:type", String)
], FilterPropertiesDto.prototype, "type", void 0);
//# sourceMappingURL=filter-properties.dto.js.map