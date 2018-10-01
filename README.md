# Jobz

# \<DesafioFrontend />

**Objetivo:**
Implementar uma aplicação para gerenciar os candidatos que estão em processo seletivo na empresa XYZ. Essa aplicação necessita ser executada nos navegadores mais recentes do mercado.

**API:** [RANDOM USER GENERATOR](https://randomuser.me/)

**Layout:** [Marvel App](https://marvelapp.com/39776de)

**Estimativa:**
Dependendo da sua experiência e/ou das ferramentas escolhidas, você pode precisar de mais ou menos tempo para realizar o desafio.
Lembre-se que vamos avaliar a sua capacidade de estimativa e também a sua capacidade em executar o projeto no tempo planejado.

Ao efetuar a estimativa para realização, por favor avise o RH.


### **Requisitos** ###
* Eu como usuário, desejo visualizar a listagem de candidatos;
* Eu como usuário, desejo pesquisar um determinado usuário conforme seu nome ou email;
* Eu como usuário, desejo que seja apresentado a foto de um usuário qualquer no menu da Minha Conta (Buscar da API);
* Eu como usuário, desejo visualizar as informações de cada candidato (Nome, email, telefone, cidade e estado);
* Eu como usuário, desejo enviar para a "LIXEIRA" um usuário que esteja na listagem "TODOS" ou "ATENDIDOS";
* Eu como usuário, desejo enviar para a listagem "TODOS" um usuário que esteja na listagem "ATENDIDOS" ou "LIXEIRA";
* Eu como usuário, desejo marcar como "ATENDIDO" um usuário que esteja na listagem "TODOS" ou "LIXEIRA";
* Eu como usuário, desejo navegar nos filtros laterais conforme a interação executada;
* Eu como usuário, desejo que ao clicar em um item da listagem seja apresentado as informações do usuário em uma nova tela;
* Eu como usuário, desejo que ao visualizar a informação de um usuário seja possível voltar a tela anterior;


### **Especificações Técnicas** ###
O sistema deve seguir o layout proposto, com isso as funcionalidades a serem desenvolvidas serão avaliadas de acordo com o seu nível.

**Nível Junior**
* Layout conforme proposto (Dê o seu máximo);
* A aplicação deve se comportar como uma Single Page Application;
* Utilização de Rotas para navegação;
* Ao navegar entre as rotas, as informações devem ser mantidas e não pode haver refresh da listagem;
* A busca deverá ser executada na listagem atual;
* (Desejável/Bônus) Gerenciamento de estado;
* (Desejável/Bônus) Paginação;


**Nível Pleno**
* Todos os requisitos do nível anterior;
* Paginação númerada;
* Armazenar todas as informações no estado utilizando a arquitetura Flux (Redux, Vuex e etc);
* Ao navegar nos filtros laterais, todas as informações devem já estar no estado;
* Ao pesquisar, deverá ser armazenado no estado todas as pesquisas realizadas na sessão atual;
* Configurar eslint;
* (Desejável/Bônus) Microinterações na interface;
* (Desejável/Bônus) Testes unitários;
* (Desejável/Bônus) Utilizar algum bundle size (Webpack, Rollup ou Parcel);


**Nível Senior**
* Todos os requisitos dos níveis anteriores;
* Paginação infinita em vez da numerada;
* Microinterações na interface;
* Testes unitários (mínimo de 70% de coverage);
* Execução dos testes unitários no build do projeto;
* Utilizar ferramenta para internacionalização (criar bundle de linguagem i18n);
* Utilizar algum bundle size (Webpack, Rollup ou Parcel);
* Utilizar alguma metodologia para CSS (BEM, SMACSS, OOCSS, ATOMIC CSS, DRY CSS);
* (Desejável/Bônus) Realizar testes de snapshot;
* (Desejável/Bônus) Apresentação do coverage dos testes unitários;
* (Desejável/Bônus) Criar o Story Book dos Components;
* (Desejável/Bônus) Separar Dumb Components e publicá-los no NPM;
* (Desejável/Bônus) CSS in JS

### ** Desejável *** ###
* A aplicação deve ser responsiva (mobile, tablet, desktop);
* Publicar o projeto em alguma plataforma (Heroku, Wedeploy, etc), afim de ser possível visualizar através de um link;

### **Especificações Gerais** ###
* Utilizar React, Vue ou Angular;
* Utilizar pré-processador de CSS (Fique a vontade para usar alguma lib/framework css);
* ECMAScript 6;
* Flexbox;
* Documentar, no mínimo, como executar o projeto;
* Armazenar o código fonte no Github;
