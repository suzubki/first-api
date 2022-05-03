"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (_req, _res) => {
    _res.send("Hola mundo weon");
});
app.get("/aasdadsadadsdasad", (_req, _res) => {
    const { s } = _req.query;
    return s.length > 10
        ? _res.send("tiene más de 10 caracteres")
        : _res.send("menos de 10");
});
app.get("/suma", (_req, _res) => {
    const a = 1, b = 21;
    _res.send(`${a + b}`);
});
app.get("/multiplicacion", (_req, _res) => {
    const a = 5, b = 21;
    _res.send(`${a * b}`);
});
app.get("/resta", (_req, _res) => {
    const a = 1243, b = 2;
    _res.send(`${a - b}`);
});
app.get("/division", (_req, _res) => {
    const a = 200, b = 40;
    _res.send(`${a / b}`);
});
app.get("/test1", (_req, _res) => {
    return _res.json({
        nombre: "Darwin",
        edad: 19,
    });
});
app.listen(PORT, () => {
    console.log("server running on 3000");
});
