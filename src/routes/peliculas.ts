import { Request, Response, Router } from "express";
import {
    validarPeliculaPorActor,
    validarPeliculaPorCategoria,
    validarPeliculaPorCiudad,
} from "../../middlewares/peliculas-validator";

const router = Router();

router.post(
    "/actor",
    validarPeliculaPorActor,
    (_req: Request, _res: Response) => {
        _res.send(_req.body);
    }
);

router.post(
    "/category",
    validarPeliculaPorCategoria,
    (_req: Request, _res: Response) => {
        _res.send("Película por id");
    }
);

router.post(
    "/city",
    validarPeliculaPorCiudad,
    (_req: Request, _res: Response) => {
        _res.send("Agregando película...");
    }
);

export default router;
