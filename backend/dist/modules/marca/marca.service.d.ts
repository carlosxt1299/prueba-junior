import { Repository } from 'typeorm';
import { Marca } from '../../entities/marca.entity';
export declare class MarcaService {
    private marcaRepository;
    constructor(marcaRepository: Repository<Marca>);
    findAll(): Promise<Marca[]>;
}
