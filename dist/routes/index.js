"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = __importDefault(require("./crud"));
const peliculas_1 = __importDefault(require("./peliculas"));
exports.default = {
    crud: crud_1.default,
    peliculas: peliculas_1.default
};
