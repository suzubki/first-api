"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("", (_req, _res) => {
    _res.send("Aquí todas las películas");
});
router.get("/:id", (_req, _res) => {
    _res.send("Película por id");
});
router.post("", (_req, _res) => {
    _res.send("Agregando película...");
});
router.put("/:id", (_req, _res) => {
    _res.send("Modificando película...");
});
router.delete("/:id", (_req, _res) => {
    _res.send("Eliminando película...");
});
exports.default = router;
