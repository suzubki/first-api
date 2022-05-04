import { Request, Response, Router } from "express";


const router = Router()

router.get("", (_req: Request, _res: Response) => {
  _res.send("Aquí todas las películas");
});

router.get("/:id", (_req: Request, _res: Response) => {
  _res.send("Película por id");
});

router.post("", (_req: Request, _res: Response) => {
  _res.send("Agregando película...");
});

router.put("/:id", (_req: Request, _res: Response) => {
  _res.send("Modificando película...");
});

router.delete("/:id", (_req: Request, _res: Response) => {
  _res.send("Eliminando película...");
});


export default router