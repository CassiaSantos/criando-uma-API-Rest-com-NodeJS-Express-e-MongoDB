import express from 'express';

//importando o express: app conterá todaas as funcionalidades do express
const app = express();
//middleware para converter o body da requisição de string em json:
app.use(express.json())

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
    },
    {
        id: 1,
        titulo: "Luna Clara e Apolo Onze",
        autor: "Adriana Falcão"
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

// ------------------- MÉTODO POST -------------------
app.post("/livros", (req, res) => {
    livros.push(req.body)
    //As requisições precisam de resposta e todas as respostas de sucesso devem conter o status 201
    res.status(201).send("Livro adicionado com sucesso!")
})

//Exportando o app para ser usado em outros arquivos:
export default app;