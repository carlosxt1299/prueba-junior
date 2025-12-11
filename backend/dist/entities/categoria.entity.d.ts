import { Producto } from './producto.entity';
export declare class Categoria {
    id: number;
    nombre: string;
    createdAt: Date;
    productos: Producto[];
}
