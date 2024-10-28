import mongoose from "mongoose";
//conexão com o mongoDB:
async function conectaNoBancoDeDados() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

//exportando a função para ser usada em outros arquivos:
export default conectaNoBancoDeDados;