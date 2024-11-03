import { autor } from "../models/Autor.js";

class AutorController {

    // ------------------- MÉTODO GET: read -------------------
    static async listarAutores(req, res) {
        try {
            const listaAutores = await autorSchema.find({}); //'listaAutores' conterá todos os autores cadastrados no banco de dados que tiverem o mesmo esquema do modelo 'autorSchema';
            res.status(200).json(listaAutores)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível carregar os autores por falha na resquisão!`})
        }
    }

    static async listarAutorPorId(req, res) {        try {
            const id = req.params.id;
            const autorEncontrado = await autorSchema.findById(id); //'listaAutores' conterá todos os autores cadastrados no banco de dados que tiverem o mesmo esquema do modelo 'autorSchema';
            res.status(200).json(autorEncontrado)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível carregar o autor desejedo por falha na resquisão!`})
        }
    }

    // ------------------- MÉTODO POST: create -------------------
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Autor criado com sucesso!", autor: novoAutor})

        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Houve um erro ao cadastrar o autor!`
            })
        }
    }

    // ------------------- MÉTODO PUT: update -------------------
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autorSchema.findByIdAndUpdate(id, req.body); //mongoose faz a atualização do autor no banco de dados através do id e o corpo da requisição;
            res.status(200).json({message: "Autor atualizado com sucesso!"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível alterar os dados do autor desejedo por falha na resquisão!`})
        }
    }    

    // ------------------- MÉTODO DELETE: delete -------------------
    
    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autorSchema.findByIdAndDelete(id); //mongoose faz a atualização do autor no banco de dados através do id e o corpo da requisição;
            res.status(200).json({message: "Autor deletado com sucesso!"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Não foi possível deletar o autor desejedo por falha na resquisão!`})
        }
    }

}
   
export default new AutorController;