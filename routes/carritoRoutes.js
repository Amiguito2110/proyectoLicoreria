"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCarrito/', auth_1.validarToken, carritoController_1.carritoController.mostrar_carrito);
        this.router.get('/obtenerCarritoUsuario/:id', auth_1.validarToken, carritoController_1.carritoController.listOne);
        this.router.post('/agregarAlCarrito/', auth_1.validarToken, carritoController_1.carritoController.agregarAlCarrito);
        this.router.delete('/eliminarDelCarrito/:id_usuario/:id_botella', auth_1.validarToken, carritoController_1.carritoController.eliminarDelCarrito);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;
