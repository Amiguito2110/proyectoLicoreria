"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contenidosController_1 = require("../controllers/contenidosController");
const auth_1 = require("../middleware/auth");
class ContenidosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosContenidos/', auth_1.validarToken, contenidosController_1.contenidosController.mostrar_todos_contenidos);
        this.router.get('/obtenerContenido/:id', auth_1.validarToken, contenidosController_1.contenidosController.listOne);
        this.router.post('/AgregarContenido/', auth_1.validarToken, contenidosController_1.contenidosController.createContenido);
        this.router.put('/actualizarContenido/:id', auth_1.validarToken, contenidosController_1.contenidosController.actualizarContenido);
        this.router.delete('/eliminarContenido/:id', auth_1.validarToken, contenidosController_1.contenidosController.eliminarContenido);
    }
}
const contenidosRoutes = new ContenidosRoutes();
exports.default = contenidosRoutes.router;
