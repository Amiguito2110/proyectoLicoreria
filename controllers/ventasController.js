"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasController = void 0;
const database_1 = __importDefault(require("../database"));
class VentasController {
    mostrar_ventas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entrando a consulta...");
            const respuesta = yield database_1.default.query('SELECT * FROM ventas');
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM ventas WHERE id_usuario = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.status(404).json({ 'mensaje': 'No tiene Ventas este Usuario' });
        });
    }
    agregarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query("INSERT INTO ventas set ?", [req.body]);
            res.json(resp);
        });
    }
    //Usuarios Ventas
    mostrar_Botellas_Vendidas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entrando a consulta...");
            const respuesta = yield database_1.default.query('SELECT * FROM usuarios_ventas');
            res.json(respuesta);
        });
    }
    listBotellasDeVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM usuarios_ventas WHERE id_venta = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.status(404).json({ 'mensaje': 'No hay ventas con este ID_venta' });
        });
    }
}
exports.ventasController = new VentasController();
