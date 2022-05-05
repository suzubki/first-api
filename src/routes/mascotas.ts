import express, { Request, Response } from "express";

const router = express.Router();

router.route("/mascotas").post((_req: Request, _res: Response) => {
    return _res.json({
        msg: "Mascota creada exitosamente!",
        body: _req.body,
    });
});

export default router;
