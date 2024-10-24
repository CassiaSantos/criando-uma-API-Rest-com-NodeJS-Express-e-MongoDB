A propriedade type definida como module será usada para importar e exportar as partes, as funções, os módulos do nosso projeto, isto é, da nossa API, utilizando a sintaxe mais moderna do JavaScript.

Vamos criar um servidor local HTTP que simula um servidor na internet fornecendo essas informações. Para isso, usaremos os métodos da biblioteca HTTP, que é uma biblioteca do próprio Node.

Já importamos a biblioteca, então o próximo passo é criar uma constante chamada server, que será o nosso servidor local. Essa const receberá a biblioteca http seguida do método createServer(), que é um método da biblioteca HTTP. Este método requer uma função callback que recebe dois argumentos, denominados req (requisição) e res (resposta).

Feito isso, podemos abrir a função (=>) e adicionar chaves ({}).

## Portas:
O número padrão de portas é 65.535. As portas são identificadas por números padronizados e muitas portas estão associadas a processos específicos, por exemplo:
* 5432 é usada para conexão com serviços do banco de dados PostgreSQL.
* 3306/3307 são usadas em conexões com o banco MySQL.
* 587 utilizada para conexões SMTP (Simple Mail Transfer Protocol, o protocolo de envio e recebimento de e-mails).
* 80 é a porta padrão de conexões HTTP, usada pelos navegadores.
Algumas portas são de “uso comum” e podem ser utilizadas por qualquer serviço, como a 3000 que utilizaremos para a API.

## Gerenciadores de pacotes
Sempre que vamos trabalhar com um projeto em Node.js do zero, uma das primeiras coisas que fazemos é criar um arquivo de configuração utilizando o comando npm init ou yarn init, assim como para todas as instalações de libs externas utilizamos o comando npm install <nome do pacote> ou yarn add <nome do pacote>.

Ambos são gerenciadores de pacotes, sendo que NPM é acrônimo de Node Package Manager ou gerenciadores de pacotes do Node.

## Mas o que são exatamente estes gerenciadores?
Gerenciadores de pacotes são repositórios de código aberto nos quais devs disponibilizam soluções para o uso da comunidade. Estas soluções são programas que outras pessoas desenvolveram e que utilizamos para ganhar tempo no desenvolvimento de nosso próprio código, e vão desde libs (bibliotecas pequenas e específicas) até frameworks com vários recursos prontos. Independente do tamanho, chamamos esses conjuntos de código de pacote (ou módulo).

Algumas dessas bibliotecas são desenvolvidas por times para resolver algum problema específico que tiveram que enfrentar. Depois, elas são disponibilizadas para que outras pessoas com o mesmo contratempo aproveitem e também utilizem.

Outras bibliotecas são disponibilizadas por empresas de software, que utilizam as plataformas dos gerenciadores para a distribuição de suas soluções de código. E sendo de código aberto, você também pode criar e publicar a sua lib para outras pessoas baixarem e instalarem em seus projetos.

## Instalação local vs global
Estes pacotes de código podem ser instalados localmente, estando disponíveis somente para o projeto no qual foi instalado através da pasta node_modules, e globalmente, sendo instalados em um diretório geral do NPM em seu computador e disponibilizados de forma geral, sem a necessidade de instalar separadamente em cada projeto.

Na maior parte das vezes, você vai utilizar a opção local com os comandos npm install <nome do pacote> ou yarn add <nome do pacote>, pois fica mais fácil fazer o gerenciamento de versão das libs que utilizamos e, muitas vezes, um pacote que instalamos “puxa” um ou vários outros pacotes auxiliares que ele precisa para funcionar. O ideal é não poluir o diretório global com libs que poderão ser utilizadas em somente um projeto.

Algumas libs e frameworks mais complexas vão solicitar que a instalação seja feita globalmente para funcionar. Sempre vale a pena consultar a documentação de cada uma! Para fazer uma instalação global de pacotes, utilizamos os comandos npm install -g <nome do pacote> ou yarn add global <nome do pacote>.

O NPM e o YARN têm algumas pequenas diferenças nos comandos e na forma como lidam com os pacotes.

## Postman - o que é?
Além de diversas outras ferramentas de testes em APIs, em nosso projeto ele vai “substituir” a parte do front-end em uma aplicação completa, enviando as requisições para o nosso servidor local.

## Partes da requisição e resposta
O protocolo de comunicação HTTP é baseado em requisições e respostas e na comunicação cliente-servidor.

Todo processo de requisição-resposta usando HTTP é sempre iniciado pelo lado cliente da requisição. O lado servidor da requisição nunca envia “ativamente” nenhuma resposta para o lado cliente sem ser como resultado de uma requisição.
Partes da requisição

### As partes que podem compor uma requisição são:

-> URL, também chamado de caminho ou rota, sempre iniciado com http:// ou https://.
-> Header, também chamado de cabeçalho, envia informações referentes ao cliente ou ao tipo de requisição. Alguns dados enviados através dos cabeçalhos são:
* host é o domínio do servidor que receberá a requisição.
* User-agent identifica o cliente, por exemplo, dados do navegador de onde está saindo a requisição.
* Content-Type é o formato do dado que está sendo enviado no body da requisição, por exemplo JSON, string etc. Confira a lista completa de tipos de dados e como devem ser declarados no header.
* Authorization são as credenciais de autenticação para acesso a recursos protegidos.
* Accept especifica o formato de retorno esperado na resposta, por exemplo, JSON.
-> Body ou corpo da requisição, onde são trafegados dados enviados pelo cliente para serem recebidos pelo servidor, normalmente utilizado para dados mais estruturados e em requisições POST, PUT or PATCH. O tipo de dado enviado pelo body deve ser o mesmo especificado no Content-Type, por exemplo, application/json.
-> Parâmetros são inseridos na URL para envio de dados específicos, muito utilizados, por exemplo, para envio de informações variáveis como termos de buscas, IDs etc.
-> Método HTTP, entre os aceitos pela rota, especifica o tipo de operação solicitado pelo cliente. Os mais comuns são os métodos GET, POST, PUT e DELETE. Vamos trabalhar com estes métodos com mais profundidade durante o curso.

### Partes da resposta
A resposta a uma requisição HTTP é enviada pelo lado servidor da comunicação, de volta ao lado cliente. A resposta contém informações referentes à requisição, que podem ser uma confirmação de operação, dados solicitados ou mesmo mensagens de erro pertinentes em caso de falha em algum ponto da comunicação.

As partes que podem compor a resposta são:

-> Status da resposta, que contém a versão HTTP utilizada, o código de status e a mensagem de status. Por exemplo, HTTP/1.1 200 OK.
-> Headers ou cabeçalhos, com informações adicionais sobre a resposta ou o conteúdo da resposta. Por exemplo:
* Content-Type;
* Content-Length, que corresponde ao tamanho em bytes do corpo da resposta;
* Cache-Control, que são as instruções de cache para a resposta;
* Set-Cookie, que adiciona um valor de cookie ao navegador. Caso queira saber mais, confira este artigo sobre o que são cookies e como são utilizados.
-> Body, o corpo da resposta, que contém os dados ou o conteúdo solicitado pelo cliente através da requisição e enviado pelo servidor. O formato de dados do body vai depender do formato especificado em Content-Type, por exemplo JSON.