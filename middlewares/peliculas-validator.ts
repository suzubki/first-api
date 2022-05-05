import { NextFunction, Request, Response } from "express";
import {
    ActorSchema,
    CategoriaSchema,
    CiudadSchema,
} from "../schemas/peliculasSchema";

const validarPeliculaPorActor = async (
    _req: Request,
    _res: Response,
    _next: NextFunction
) => {
    try {
        await ActorSchema.validateAsync(_req.body);
        _next();
    } catch (error) {
        _res.send({
            Error: "El body necesita actor_id, first_name, last_name, last_update",
        });
    }
};

const validarPeliculaPorCategoria = async (
    _req: Request,
    _res: Response,
    _next: NextFunction
) => {
    try {
        await CategoriaSchema.validateAsync(_req.body);
        _next();
    } catch (error) {
        _res.send({
            Error: "El body necesita category_id, name, last_update",
        });
    }
};

const validarPeliculaPorCiudad = async (
    _req: Request,
    _res: Response,
    _next: NextFunction
) => {
    try {
        await CiudadSchema.validateAsync(_req.body);
        _next();
    } catch (error) {
        _res.send({
            Error: "El body necesita city_id, city, country_id, last_update",
        });
    }
};

export {
    validarPeliculaPorActor,
    validarPeliculaPorCiudad,
    validarPeliculaPorCategoria,
};
