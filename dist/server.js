"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const express = require("express");
const api = express();
const PORT = 3000;
//middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
// routes
api.use('', routes_1.default.crud);
api.use('/peliculas', routes_1.default.peliculas);
// listen
api.listen(PORT, () => {
    console.log("server running on 3000");
});
