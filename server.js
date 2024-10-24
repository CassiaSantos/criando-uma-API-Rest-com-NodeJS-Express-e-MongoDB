//exportação do express:
import app from "./src/app.js";

//porta em que o serviador irá executar:
const PORT = 3000;

//método ouvirá o servidor para conexões que acontecerem nele na porta 3000
app.listen(PORT, () => {
    console.log("Servidor escutando!")
})