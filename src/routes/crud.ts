import {  Request, Response } from "express";

import { Router } from "express"

const router = Router();

interface Props {
  s: string;
}

router.get("/", (_req: Request, _res: Response) => {
  _res.send("Hola mundo");
});

router.get(
  "/aasdadsadadsdasad/:id?",
  (_req: Request<{}, {}, {}, Props>, _res: Response) => {
      // const { s } = _req.query;
      // s.length > 10
      //     ? _res.send("tiene más de 10 caracteres")
      //     : _res.send("menos de 10");
      console.log(_req.query);
      _res.send('aaa')
  }
);

router.get("/suma", (_req: Request, _res: Response) => {
  const a: number = 1,
      b: number = 21;

  _res.send(`${a + b}`);
});

router.get("/multiplicacion", (_req: Request, _res: Response) => {
  const a: number = 5,
      b: number = 21;

  _res.send(`${a * b}`);
});

router.get("/resta", (_req: Request, _res: Response) => {
  const a: number = 1243,
      b: number = 2;

  _res.send(`${a - b}`);
});

router.get("/division", (_req: Request, _res: Response) => {
  const a: number = 200,
      b: number = 40;

  _res.send(`${a / b}`);
});

router.get("/test1", (_req: Request, _res: Response) => {
  _res.json({
      nombre: "Darwin",
      edad: 19,
  });
});

router.post("/sumarConRequestBody", (_req: Request, _res: Response) => {
  const { a, b }: {a: number, b: number } = _req.body;

  _res.json( a + b)
});

export default router