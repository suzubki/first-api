import { Express, Request, Response } from "express";

const express = require("express");
const app: Express = express();
const PORT = 3000;

interface Props {
    s: string;
}

app.get("/", (_req: Request, _res: Response) => {
    _res.send("Hola mundo");
});

app.get(
    "/aasdadsadadsdasad",
    (_req: Request<{}, {}, {}, Props>, _res: Response) => {
        const { s } = _req.query;
        return s.length > 10
            ? _res.send("tiene más de 10 caracteres")
            : _res.send("menos de 10");
    }
);

app.get("/suma", (_req: Request, _res: Response) => {
    const a: number = 1,
        b: number = 21;

    _res.send(`${a + b}`);
});

app.get("/multiplicacion", (_req: Request, _res: Response) => {
    const a: number = 5,
        b: number = 21;

    _res.send(`${a * b}`);
});

app.get("/resta", (_req: Request, _res: Response) => {
    const a: number = 1243,
        b: number = 2;

    _res.send(`${a - b}`);
});

app.get("/division", (_req: Request, _res: Response) => {
    const a: number = 200,
        b: number = 40;

    _res.send(`${a / b}`);
});

app.get("/test1", (_req: Request, _res: Response) => {
    return _res.json({
        nombre: "Darwin",
        edad: 19,
    });
});

app.listen(PORT, () => {
    console.log("server running on 3000");
});
