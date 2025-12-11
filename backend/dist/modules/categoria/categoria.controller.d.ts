import { CategoriaService } from './categoria.service';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    findAll(): Promise<import("../../entities/categoria.entity").Categoria[]>;
}
