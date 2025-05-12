import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FilterPropertiesDto } from './dto/filter-properties.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Property } from './entities/property.entity';

@ApiTags('properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo imóvel' })
  @ApiResponse({
    status: 201,
    description: 'Imóvel criado com sucesso',
    type: Property,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os imóveis com filtros opcionais' })
  @ApiResponse({
    status: 200,
    description: 'Lista de imóveis retornada com sucesso',
    type: [Property],
  })
  @ApiQuery({ name: 'minPrice', required: false, description: 'Preço mínimo' })
  @ApiQuery({ name: 'maxPrice', required: false, description: 'Preço máximo' })
  @ApiQuery({
    name: 'type',
    required: false,
    description: 'Tipo do imóvel (HOME, APARTMENT, KITNET)',
  })
  findAll(@Query(ValidationPipe) filterDto: FilterPropertiesDto) {
    return this.propertiesService.findAll(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um imóvel pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Imóvel encontrado com sucesso',
    type: Property,
  })
  @ApiResponse({ status: 404, description: 'Imóvel não encontrado' })
  @ApiParam({ name: 'id', description: 'ID do imóvel' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um imóvel pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Imóvel atualizado com sucesso',
    type: Property,
  })
  @ApiResponse({ status: 404, description: 'Imóvel não encontrado' })
  @ApiParam({ name: 'id', description: 'ID do imóvel' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um imóvel pelo ID' })
  @ApiResponse({ status: 200, description: 'Imóvel removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Imóvel não encontrado' })
  @ApiParam({ name: 'id', description: 'ID do imóvel' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.propertiesService.remove(id);
  }
}
