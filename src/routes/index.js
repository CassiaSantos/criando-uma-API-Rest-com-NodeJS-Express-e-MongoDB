// BARRIL

import express from "express";
import routes from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJS"));

    //rotas definidas em routes.js serão passadas para o express:
    app.use(express.json(), routesLivro);
};
  
export default routes; 