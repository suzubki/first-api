import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

interface Mascota {
    tipo: string;
    edad: number;
    raza: string;
    mascota_id: number;
    nombre: string;
    owner_id: number;
}

const MascotaSchema: ObjectSchema<Mascota> = Joi.object({
    tipo: Joi.string().required(),
    edad: Joi.number().integer(),
    raza: Joi.string(),
    mascota_id: Joi.number().integer().required(),
    nombre: Joi.string().required(),
    owner_id: Joi.number().integer().required(),
});

export const validarMascota = async (
    _req: Request,
    _res: Response,
    _next: NextFunction
) => {
    try {
        await MascotaSchema.validateAsync(_req.body);
        _next();
    } catch (error) {
        _res.status;
    }
};
