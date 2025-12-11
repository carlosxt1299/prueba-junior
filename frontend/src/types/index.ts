export interface Marca {
  id: number;
  nombre: string;
  createdAt: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  createdAt: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  marcaId: number;
  categoriaId: number;
  marca: Marca;
  categoria: Categoria;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductoDto {
  nombre: string;
  descripcion?: string;
  precio: number;
  stock?: number;
  marcaId: number;
  categoriaId: number;
}

export interface UpdateProductoDto {
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
  marcaId?: number;
  categoriaId?: number;
}
