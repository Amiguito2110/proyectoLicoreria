"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const botellasController_1 = require("../controllers/botellasController");
const auth_1 = require("../middleware/auth");
class BotellasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasBotellas/', auth_1.validarToken, botellasController_1.botellasController.mostrar_todas_botellas);
        this.router.get('/obtenerBotella/:id', auth_1.validarToken, botellasController_1.botellasController.listOne);
        this.router.post('/agregarBotella/', auth_1.validarToken, botellasController_1.botellasController.agregarBotella);
        this.router.put('/actualizarBotella/:id', auth_1.validarToken, botellasController_1.botellasController.actualizarBotella);
        this.router.delete('/eliminarBotella/:id', auth_1.validarToken, botellasController_1.botellasController.eliminarBotella);
        this.router.get('/listarBotellasTipo/:id', auth_1.validarToken, botellasController_1.botellasController.listarBotellasTipo);
    }
}
const botellasRoutes = new BotellasRoutes();
exports.default = botellasRoutes.router;
