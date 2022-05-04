"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_req, _res) => {
    _res.send("Hola mundo");
});
router.get("/aasdadsadadsdasad/:id?", (_req, _res) => {
    // const { s } = _req.query;
    // s.length > 10
    //     ? _res.send("tiene más de 10 caracteres")
    //     : _res.send("menos de 10");
    console.log(_req.query);
    _res.send('aaa');
});
router.get("/suma", (_req, _res) => {
    const a = 1, b = 21;
    _res.send(`${a + b}`);
});
router.get("/multiplicacion", (_req, _res) => {
    const a = 5, b = 21;
    _res.send(`${a * b}`);
});
router.get("/resta", (_req, _res) => {
    const a = 1243, b = 2;
    _res.send(`${a - b}`);
});
router.get("/division", (_req, _res) => {
    const a = 200, b = 40;
    _res.send(`${a / b}`);
});
router.get("/test1", (_req, _res) => {
    _res.json({
        nombre: "Darwin",
        edad: 19,
    });
});
router.post("/sumarConRequestBody", (_req, _res) => {
    const { a, b } = _req.body;
    _res.json(a + b);
});
exports.default = router;
