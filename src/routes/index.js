// BARRIL

import express from "express";
import routes from "./livrosRoutes.js";

const routesLivro = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJS"));

    //rotas definidas em routes.js serão passadas para o express:
    app.use(express.json(), routes);
};
  
export default routesLivro; 