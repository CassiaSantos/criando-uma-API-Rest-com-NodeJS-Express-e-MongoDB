import livro from "../models/Livros.js";
import { autor } from "../models/Autor.js";
class LivroController {

    // ------------------- MÉTODO GET: read -------------------
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livroSchema.find({}); //'listaLivros' conterá todos os livros cadastrados no banco de dados que tiverem o mesmo esquema do modelo 'livroSchema';
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível carregar os livros por falha na resquisão!`})
        }
    }
    
    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livroSchema.findById(id); //'listaLivros' conterá todos os livros cadastrados no banco de dados que tiverem o mesmo esquema do modelo 'livroSchema';
            res.status(200).json(livroEncontrado)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível carregar o livro desejedo por falha na resquisão!`})
        }
    }

    // ------------------- MÉTODO POST: create -------------------
    static async cadastrarLivro(req, res) {
        const novoLivro = (req.body);
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {//spread operator
                ...autorEncontrado._doc
            }};
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({
                message: "Livro criado com sucesso!", livro: novoLivro})

        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Houve um erro ao cadastrar o livro!`
            })
        }
    }

    // ------------------- MÉTODO PUT: update -------------------
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livroSchema.findByIdAndUpdate(id, req.body); //mongoose faz a atualização do livro no banco de dados através do id e o corpo da requisição;
            res.status(200).json({message: "Livro atualizado com sucesso!"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível alterar os dados do livro desejedo por falha na resquisão!`})
        }
    }

    // ------------------- MÉTODO DELETE: delete -------------------
    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livroSchema.findByIdAndDelete(id); //mongoose faz a atualização do livro no banco de dados através do id e o corpo da requisição;
            res.status(200).json({message: "Livro deletado com sucesso!"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível deletar o livro desejedo por falha na resquisão!`})
        }
    }

}

export default new LivroController;