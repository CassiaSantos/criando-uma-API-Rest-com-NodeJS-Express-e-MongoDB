A propriedade type definida como module será usada para importar e exportar as partes, as funções, os módulos do nosso projeto, isto é, da nossa API, utilizando a sintaxe mais moderna do JavaScript.

Vamos criar um servidor local HTTP que simula um servidor na internet fornecendo essas informações. Para isso, usaremos os métodos da biblioteca HTTP, que é uma biblioteca do próprio Node.

Já importamos a biblioteca, então o próximo passo é criar uma constante chamada server, que será o nosso servidor local. Essa const receberá a biblioteca http seguida do método createServer(), que é um método da biblioteca HTTP. Este método requer uma função callback que recebe dois argumentos, denominados req (requisição) e res (resposta).

Feito isso, podemos abrir a função (=>) e adicionar chaves ({}).