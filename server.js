//servidor HTTP local para publicação dos dados que a API precisa fornecer:

// //importação de http de "http" como string - http é uma biblioteca nativa do Node;
// import http from "http";

//exportação do express:
import app from "./src/app.js";

//porta em que o serviador irá executar:
const PORT = 3000;

//Rota base:
const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota de livros",
    "/autores": "Entrei na rota de autores"
}

// const server = http.createServer((req, res) => {
//     //o cabeçalho conterá o código de status HTTP da requisição e o tipo de conteúdo que irá trafegar
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     //mesangem transmitida:
//     res.end(rotas[req.url]);
// });

//método ouvirá o servidor para conexões que acontecerem nele na porta 3000
app.listen(PORT, () => {
    console.log("Servidor escutando!")
})