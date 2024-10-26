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
        id: 3,
        titulo: "Luna Clara e Apolo Onze",
        autor: "Adriana Falcão"
    }
]

//Função para recuperar indice de um livro no array:
function buscaLivroPorId(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id); //convertendo o id de string para numero
    })
}
//gerenciamento de rotas com express:
// ------------------- MÉTODO GET: read -------------------
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

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