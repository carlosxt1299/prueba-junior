import { Marca } from './marca.entity';
import { Categoria } from './categoria.entity';
export declare class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    marcaId: number;
    categoriaId: number;
    marca: Marca;
    categoria: Categoria;
    createdAt: Date;
    updatedAt: Date;
}
