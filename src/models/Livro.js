import e from "express";
import mongoose from "mongoose";
import {autorSchema} from "./Autor.js";

//Schema do livro:
/*Schema: objeto de configuração que define a estruttura e as propriedades de um documento */
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
    titulo: {type: String, required: true},	
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    ano: {type: Number},
    autor: autorSchema

}, {versionKey: false}) //não será um schema de versão;

const livro = mongoose.model("livros", livroSchema); //'livros' é a coleção no MongoDB;
export default livro;