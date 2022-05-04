import { Express } from 'express';
import routes from './routes';

const express = require("express");
const api: Express = express();
const PORT = 3000;

//middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }))

// routes
api.use('', routes.crud)
api.use('/peliculas', routes.peliculas)

// listen
api.listen(PORT, () => {
    console.log("server running on 3000");
});

