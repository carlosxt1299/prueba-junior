import { Producto } from './producto.entity';
export declare class Marca {
    id: number;
    nombre: string;
    createdAt: Date;
    productos: Producto[];
}
