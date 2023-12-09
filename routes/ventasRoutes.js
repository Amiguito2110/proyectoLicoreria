"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controllers/ventasController");
const auth_1 = require("../middleware/auth");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarVentas/', auth_1.validarToken, ventasController_1.ventasController.mostrar_ventas);
        this.router.get('/obtenerVentasPorUsuario/:id', auth_1.validarToken, ventasController_1.ventasController.listOne);
        this.router.post('/agregarVenta/', auth_1.validarToken, ventasController_1.ventasController.agregarVenta);
        this.router.get('/Usuarios_Ventas/mostrarBotellasVendidas/', auth_1.validarToken, ventasController_1.ventasController.mostrar_Botellas_Vendidas);
        this.router.get('/Usuarios_Ventas/listarBotellasDeVenta/:id', auth_1.validarToken, ventasController_1.ventasController.listBotellasDeVenta);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
