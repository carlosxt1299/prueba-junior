import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    create(createProductoDto: CreateProductoDto): Promise<import("../../entities/producto.entity").Producto>;
    findAll(): Promise<import("../../entities/producto.entity").Producto[]>;
    findOne(id: number): Promise<import("../../entities/producto.entity").Producto>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<import("../../entities/producto.entity").Producto>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
