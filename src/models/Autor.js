import mongoose, { version } from "mongoose";

const autorSchema = new moongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
},
    {versionKey: false});

const autor = moongoose.model("autores", autorSchema);

export default {autor, autorSchema}; //autorSchema será exportado pois "um autor faz parte de um livro";