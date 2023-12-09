"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoController_1 = require("../controllers/tipoController");
const auth_1 = require("../middleware/auth");
class TipoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosTipos/', auth_1.validarToken, tipoController_1.tipoController.mostrar_todos_tipos);
        this.router.get('/obtenerTipo/:id', auth_1.validarToken, tipoController_1.tipoController.listOne);
        this.router.post('/crearTipo/', auth_1.validarToken, tipoController_1.tipoController.createTipo);
        this.router.put('/actualizarTipo/:id', auth_1.validarToken, tipoController_1.tipoController.actualizarTipo);
        this.router.delete('/eliminarTipo/:id', auth_1.validarToken, tipoController_1.tipoController.eliminarTipo);
    }
}
const tipoRoutes = new TipoRoutes();
exports.default = tipoRoutes.router;
