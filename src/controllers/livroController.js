import livro from "../models/Livros.js";

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livroSchema.find({}); //'listaLivros' conterá todos os livros cadastrados no banco de dados que tiverem o mesmo esquema do modelo 'livroSchema';
        res.status(200).json(listaLivros)
    }
}

export default new LivroController;