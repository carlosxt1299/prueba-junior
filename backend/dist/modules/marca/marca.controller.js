"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaController = void 0;
const common_1 = require("@nestjs/common");
const marca_service_1 = require("./marca.service");
let MarcaController = class MarcaController {
    constructor(marcaService) {
        this.marcaService = marcaService;
    }
    findAll() {
        return this.marcaService.findAll();
    }
};
exports.MarcaController = MarcaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarcaController.prototype, "findAll", null);
exports.MarcaController = MarcaController = __decorate([
    (0, common_1.Controller)('marcas'),
    __metadata("design:paramtypes", [marca_service_1.MarcaService])
], MarcaController);
//# sourceMappingURL=marca.controller.js.map