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
exports.PropertiesController = void 0;
const common_1 = require("@nestjs/common");
const properties_service_1 = require("./properties.service");
const create_property_dto_1 = require("./dto/create-property.dto");
const update_property_dto_1 = require("./dto/update-property.dto");
const filter_properties_dto_1 = require("./dto/filter-properties.dto");
const swagger_1 = require("@nestjs/swagger");
const property_entity_1 = require("./entities/property.entity");
let PropertiesController = class PropertiesController {
    propertiesService;
    constructor(propertiesService) {
        this.propertiesService = propertiesService;
    }
    create(createPropertyDto) {
        return this.propertiesService.create(createPropertyDto);
    }
    findAll(filterDto) {
        return this.propertiesService.findAll(filterDto);
    }
    findOne(id) {
        return this.propertiesService.findOne(id);
    }
    update(id, updatePropertyDto) {
        return this.propertiesService.update(id, updatePropertyDto);
    }
    remove(id) {
        return this.propertiesService.remove(id);
    }
};
exports.PropertiesController = PropertiesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo imóvel' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Imóvel criado com sucesso',
        type: property_entity_1.Property,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_property_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os imóveis com filtros opcionais' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de imóveis retornada com sucesso',
        type: [property_entity_1.Property],
    }),
    (0, swagger_1.ApiQuery)({ name: 'minPrice', required: false, description: 'Preço mínimo' }),
    (0, swagger_1.ApiQuery)({ name: 'maxPrice', required: false, description: 'Preço máximo' }),
    (0, swagger_1.ApiQuery)({
        name: 'type',
        required: false,
        description: 'Tipo do imóvel (HOME, APARTMENT, KITNET)',
    }),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_properties_dto_1.FilterPropertiesDto]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um imóvel pelo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Imóvel encontrado com sucesso',
        type: property_entity_1.Property,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Imóvel não encontrado' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do imóvel' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um imóvel pelo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Imóvel atualizado com sucesso',
        type: property_entity_1.Property,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Imóvel não encontrado' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do imóvel' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_property_dto_1.UpdatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um imóvel pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Imóvel removido com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Imóvel não encontrado' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do imóvel' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertiesController.prototype, "remove", null);
exports.PropertiesController = PropertiesController = __decorate([
    (0, swagger_1.ApiTags)('properties'),
    (0, common_1.Controller)('properties'),
    __metadata("design:paramtypes", [properties_service_1.PropertiesService])
], PropertiesController);
//# sourceMappingURL=properties.controller.js.map