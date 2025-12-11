import { Controller, Get } from '@nestjs/common';
import { MarcaService } from './marca.service';

@Controller('marcas')
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Get()
  findAll() {
    return this.marcaService.findAll();
  }
}
