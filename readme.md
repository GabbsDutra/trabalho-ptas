Desenvolvi uma API RESTful utilizando Node.js e Express.js para gerenciar [tema escolhido, ex: biblioteca virtual], permitindo a realização das operações básicas de CRUD (Create, Read, Update, Delete). Para organizar o projeto, criei a estrutura com as pastas routes/, onde defini as rotas da API; controllers/, responsável pela lógica das requisições; middlewares/, para validação dos dados; utils/, contendo funções auxiliares; e o arquivo server.js, onde configurei o servidor.

Após configurar o ambiente, instalei as dependências necessárias com npm install express mongoose dotenv (ou sequelize, caso utilizasse MySQL). Em seguida, implementei as rotas para criação, consulta, atualização e exclusão de registros, garantindo que cada uma fosse devidamente tratada nos controllers. Para evitar inconsistências nos dados, desenvolvi um middleware de validação que verifica se os campos obrigatórios foram preenchidos, se os IDs são numéricos válidos e se valores como preços são positivos.

A conexão com o banco de dados foi configurada usando Mongoose para MongoDB, armazenando as credenciais no arquivo .env. Para testar a API, utilizei o insomnia, verificando se todas as operações funcionavam corretamente e ajustando possíveis erros. Por fim, documentei o projeto em um arquivo README.md, detalhando seu funcionamento, as rotas disponíveis e exemplos de requisições.

Para rodar o projeto, bastou clonar o repositório, instalar as dependências com npm install, configurar as credenciais no .env e iniciar o servidor com npm start. Após isso, utilizei ferramentas do Insomnia para validar o funcionamento das rotas. Esse processo garantiu que a API fosse estruturada, funcional e bem documentada.


Rota padrão da minha casa 5000
