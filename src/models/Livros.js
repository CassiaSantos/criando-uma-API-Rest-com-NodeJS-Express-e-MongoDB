import e from "express";
import mongoose from "mongoose";

//Schema do livro:
/*Schema: objeto de configuração que define a estruttura e as propriedades de um documento */
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
    titulo: {type: String, required: true},	
    autor: {type: String, required: true},
    editora: {type: String},
    paginas: {type: Number},
    ano: {type: Number}

}, {versionKey: false}) //não será um schema de versão;

const livro = mongoose.model("livros", livroSchema); //'livros' é a coleção no MongoDB;
export default livro;