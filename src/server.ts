import express, { Express } from "express";
import { validarMascota } from "../middlewares/mascota-validator";
import routes from "./routes";

const api: Express = express();
const PORT = 3000;

//middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// routes
api.use("", routes.crud);

// route peliculas
api.use("/peliculas", routes.peliculas);

// route mascotas
api.use(validarMascota, routes.mascotas);

// listen
api.listen(PORT, () => {
    console.log("server running on 3000");
});
