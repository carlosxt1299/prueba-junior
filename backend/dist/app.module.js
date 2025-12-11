"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const marca_module_1 = require("./modules/marca/marca.module");
const categoria_module_1 = require("./modules/categoria/categoria.module");
const producto_module_1 = require("./modules/producto/producto.module");
const marca_entity_1 = require("./entities/marca.entity");
const categoria_entity_1 = require("./entities/categoria.entity");
const producto_entity_1 = require("./entities/producto.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'prueba-usuario',
                password: 'prueba-pass',
                database: 'prueba-coope',
                entities: [marca_entity_1.Marca, categoria_entity_1.Categoria, producto_entity_1.Producto],
                synchronize: true,
            }),
            marca_module_1.MarcaModule,
            categoria_module_1.CategoriaModule,
            producto_module_1.ProductoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map