import express from "express";
import livroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);

//No postman, utilizar modelo de URL: http://localhost:3000/livros/busca?editora=editorQueEuQueroBuscarLivros
routes.get("/livros/busca", livroController.buscarLivroPorEditora);//Express trabalha com complexidade das rotas: da maior para a menor;

routes.get("/livros/:id", livroController.listarLivrosPorId);
routes.post("/livros", livroController.cadastrarLivro);
routes.put("/livros/:id", livroController.atualizarLivro);
routes.delete("/livros/:id", livroController.deletarLivro);

export default routes;