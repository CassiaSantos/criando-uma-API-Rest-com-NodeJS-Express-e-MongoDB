import express from 'express';
import mongoose, { mongo } from 'mongoose';
//importando o arquivo de configuração do mongoDB:
import conectaNoBancoDeDados from './config/dbConect.js';

//importanto as rotas:
import routes from './routes/index.js';

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

//importando as rotas:
routes(app);

// ------------------- MÉTODO DELETE: delete -------------------
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivroPorId(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro removido com sucesso!")
})

//Exportando o app para ser usado em outros arquivos:
export default app;