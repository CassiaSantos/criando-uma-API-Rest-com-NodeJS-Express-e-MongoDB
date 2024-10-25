import express from 'express';

//importando o express: app conterá todaas as funcionalidades do express
const app = express();

//Array de livros: 
const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Aneis",
        autor: "J. R. R. Tolkien"
    },
    {
        id: 2,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling"
    }
]
//gerenciamento de rotas com express:
// ------------------- MÉTODO GET -------------------
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});


//Exportando o app para ser usado em outros arquivos:
export default app;