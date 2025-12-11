import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateProductoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  precio?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock?: number;

  @IsNumber()
  @IsOptional()
  marcaId?: number;

  @IsNumber()
  @IsOptional()
  categoriaId?: number;
}
