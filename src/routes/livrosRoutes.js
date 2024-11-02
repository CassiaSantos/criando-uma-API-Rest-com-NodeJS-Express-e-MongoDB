import express from "express";
import livroController from "../controllers/livroController.js";

const routesLivro = express.Router();

routesLivro.get("/livros", livroController.listarLivros);

export default routesLivro;