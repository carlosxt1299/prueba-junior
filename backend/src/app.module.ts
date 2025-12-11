import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from './modules/marca/marca.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { ProductoModule } from './modules/producto/producto.module';
import { Marca } from './entities/marca.entity';
import { Categoria } from './entities/categoria.entity';
import { Producto } from './entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'prueba-usuario',
      password: 'prueba-pass',
      database: 'prueba-coope',
      entities: [Marca, Categoria, Producto],
      synchronize: true,
    }),
    MarcaModule,
    CategoriaModule,
    ProductoModule,
  ],
})
export class AppModule {}
