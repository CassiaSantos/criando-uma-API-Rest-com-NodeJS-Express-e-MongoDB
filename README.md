# criando uma API Rest com NodeJS Express e MongoDB

API - Aplication Programming Interface
(Interface de Aplicação de Aplicações)

Funcionamento do API:
Front-end: Interface com o usuário 
Front-end: Interface entre o Front-end e a base de dados 
Dados: armazenamento das informações 

## O que será construído: 
API Rest com para o sistema interno de uma livraria.

### API REST
É um tipo de API extremamente comum em programação web.

O termo REST (representational state transfer ou transferência de estado representacional) representa um padrão para desenvolvimento de APIs web utilizando o protocolo HTTP para transmissão de dados.

## Métodos HTTP
Em aplicação REST, os métodos mais utilizados são:
* O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
* O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
* O método PUT edita e atualiza documentos em um servidor;
* O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

## Códigos de Respostas
Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Por exemplo:
* 200 (OK), requisição atendida com sucesso;
* 201 (CREATED), objeto ou recurso criado com sucesso;
* 204 (NO CONTENT), objeto ou recurso deletado com sucesso;
* 400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
* 404 (NOT FOUND), rota ou coleção não encontrada;
* 500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor

disponível em: https://www.alura.com.br/artigos/rest-conceito-e-fundamentos


## Comandos:
#### Criando o servidor
##### Criação de um projeto Node
```npm init -y```