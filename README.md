# API para uma Livraria

Esta é uma API para gerenciar uma livraria, construída com Node.js e MongoDB. A API permite o gerenciamento de autores e livros, possibilitando operações como listagem, criação, atualização e exclusão de registros. Este projeto é ideal para iniciantes que estão aprendendo a desenvolver APIs RESTful com Node.js.

## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)
  - [Autores](#autores)
  - [Livros](#livros)
- [Execução](#execução)
- [Contribuição](#contribuição)

## Requisitos

- Node.js v12+ 
- MongoDB v4+

## Instalação

Clone este repositório e instale as dependências com o seguinte comando:

```bash
git clone https://github.com/seu-usuario/livraria-api.git
cd livraria-api
npm install
```

## Configuração

1. Crie um arquivo `.env` com as seguintes variáveis:

```plaintext
PORT=3000
MONGO_URI=sua_conexao_mongo
```

2. Certifique-se de que o MongoDB esteja em execução localmente ou forneça uma URI válida para um banco de dados remoto.

## Estrutura do Projeto

```
.
├── controllers/
│   ├── autorController.js
│   └── livroController.js
├── models/
│   ├── Autor.js
│   └── Livro.js
├── app.js
└── server.js
```

- **`controllers/`**: Contém os controladores para os recursos da API (`autor` e `livro`), responsáveis por realizar operações no banco de dados.
- **`models/`**: Define os modelos de dados (`Autor` e `Livro`) utilizados no MongoDB.
- **`app.js`**: Configura a aplicação Express, incluindo middlewares e rotas.
- **`server.js`**: Inicializa o servidor.

## Endpoints

### Autores

- **GET /autores** - Lista todos os autores.
- **GET /autores/:id** - Lista um autor pelo ID.
- **POST /autores** - Cadastra um novo autor.
- **PUT /autores/:id** - Atualiza um autor pelo ID.
- **DELETE /autores/:id** - Exclui um autor pelo ID.

### Livros

- **GET /livros** - Lista todos os livros.
- **GET /livros/:id** - Lista um livro pelo ID.
- **POST /livros** - Cadastra um novo livro.
- **PUT /livros/:id** - Atualiza um livro pelo ID.
- **DELETE /livros/:id** - Exclui um livro pelo ID.
- **GET /livros/busca?editora=nome** - Busca livros por editora.

## Execução

Inicie o servidor com o comando:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. 