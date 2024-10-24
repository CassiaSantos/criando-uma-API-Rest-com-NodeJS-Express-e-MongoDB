import express from 'express';

//importando o express: app conterá todaas as funcionalidades do express
const app = express();

//gerenciamento de rotas com express:
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

//Exportando o app para ser usado em outros arquivos:
export default app;