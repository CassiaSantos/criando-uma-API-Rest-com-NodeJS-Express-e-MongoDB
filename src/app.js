import express from 'express';
import mongoose, { mongo } from 'mongoose';
//importando o arquivo de configuração do mongoDB:
import conectaNoBancoDeDados from './config/dbConect.js';

//importando schema de um livro para fazer a API se comunicar com o banco e não mais com o array:
import livroSchema from './models/Livros.js';

const conexaoDB = await conectaNoBancoDeDados();

//Caso ocorra algum erro na conexão com o mongoDB:
conexaoDB.on("error", (erro) => {
    console.log("Erro de conxão com o banco de dados: ", erro)
})

//Caso o mongoDB seja conectado com sucesso:
conexaoDB.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
})

//importando o express: app conterá todaas as funcionalidades do express
const app = express();
//middleware para converter o body da requisição de string em json:
app.use(express.json())

//gerenciamento de rotas com express:
// ------------------- MÉTODO GET: read -------------------
app.get("/livros", async (req, res) => {
    const listaLivros = await livroSchema.find({}); //'listaLivros' conterá todos os livros cadastrados no banco de dados que tiverem o mesmo esquema do modelo 'livroSchema';
    res.status(200).json(listaLivros)
})

//Recupera livro com id especificado:
app.get("/livros/:id", (req, res) => {
    // O id da requisição será passado como parâmetro para a função buscaLivroPorId localizar o livro que tem esse valor como índice no array:
    const index = buscaLivroPorId(req.params.id);
    res.status(200).json(livros[index])
})

// ------------------- MÉTODO POST: create -------------------
app.post("/livros", (req, res) => {
    livros.push(req.body)
    //As requisições precisam de resposta e todas as respostas de sucesso devem conter o status 201
    res.status(201).send("Livro adicionado com sucesso!")
})

// ------------------- MÉTODO PUT: update -------------------
app.put("/livros/:id", (req, res) => {
    const index = buscaLivroPorId(req.params.id);
    livros[index].titulo = req.body.titulo; //altera o titulo pelo que for enviado no body da requisição;
    livros[index].autor = req.body.autor; 
    res.status(200).json(livros)
})


// ------------------- MÉTODO DELETE: delete -------------------
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivroPorId(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro removido com sucesso!")
})

//Exportando o app para ser usado em outros arquivos:
export default app;