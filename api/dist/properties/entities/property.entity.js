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
exports.Property = exports.PropertyType = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
var PropertyType;
(function (PropertyType) {
    PropertyType["HOME"] = "HOME";
    PropertyType["APARTMENT"] = "APARTMENT";
    PropertyType["KITNET"] = "KITNET";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
let Property = class Property {
    id;
    title;
    description;
    address;
    price;
    type;
    createdAt;
};
exports.Property = Property;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único do imóvel',
        example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Property.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Título do imóvel',
        example: 'Casa em Condomínio',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição do imóvel',
        example: 'Casa ampla com 3 quartos e piscina',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Endereço do imóvel',
        example: 'Rua das Flores, 123',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Preço do imóvel', example: 350000 }),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Property.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo do imóvel',
        enum: PropertyType,
        example: PropertyType.HOME,
    }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: PropertyType,
        default: PropertyType.HOME,
    }),
    __metadata("design:type", String)
], Property.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de criação do registro',
        example: '2023-01-01T00:00:00Z',
    }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "createdAt", void 0);
exports.Property = Property = __decorate([
    (0, typeorm_1.Entity)('properties')
], Property);
//# sourceMappingURL=property.entity.js.map