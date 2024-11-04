import mongoose, { version } from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
},
    {versionKey: false});

const autor = mongoose.model("autores", autorSchema);

export {autor, autorSchema}; //autorSchema será exportado pois "um autor faz parte de um livro";