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
exports.CreatePropertyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const property_entity_1 = require("../entities/property.entity");
class CreatePropertyDto {
    title;
    description;
    address;
    price;
    type;
}
exports.CreatePropertyDto = CreatePropertyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Título do imóvel',
        example: 'Casa em Condomínio',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O título é obrigatório' }),
    (0, class_validator_1.IsString)({ message: 'O título deve ser uma string' }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição do imóvel',
        example: 'Casa ampla com 3 quartos e piscina',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A descrição é obrigatória' }),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string' }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Endereço do imóvel',
        example: 'Rua das Flores, 123',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O endereço é obrigatório' }),
    (0, class_validator_1.IsString)({ message: 'O endereço deve ser uma string' }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Preço do imóvel', example: 350000 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O preço é obrigatório' }),
    (0, class_validator_1.IsNumber)({}, { message: 'O preço deve ser um número' }),
    (0, class_validator_1.Min)(0, { message: 'O preço deve ser maior ou igual a zero' }),
    __metadata("design:type", Number)
], CreatePropertyDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo do imóvel',
        enum: property_entity_1.PropertyType,
        example: property_entity_1.PropertyType.HOME,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo é obrigatório' }),
    (0, class_validator_1.IsEnum)(property_entity_1.PropertyType, { message: 'Tipo de imóvel inválido' }),
    __metadata("design:type", String)
], CreatePropertyDto.prototype, "type", void 0);
//# sourceMappingURL=create-property.dto.js.map