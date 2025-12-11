import { MarcaService } from './marca.service';
export declare class MarcaController {
    private readonly marcaService;
    constructor(marcaService: MarcaService);
    findAll(): Promise<import("../../entities/marca.entity").Marca[]>;
}
