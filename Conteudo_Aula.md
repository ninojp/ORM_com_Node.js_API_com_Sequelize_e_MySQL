# ORM com Node.js API com Sequelize e MySQL

Este curso não tem a ALURI(IA), e o conteúdo das primeira aulas referece a assuntos, na sua maioria, já abordados em outros cursos e explicações sobre as compatibilidas do material do curso suas atualizações(SQL, Sequelize).

## ORM - Object-Relational Mapping

- ORM significa Mapeador de Objeto Relacional (em uma tradução livre) e usamos para isolar a camada relacional de dados do restante da aplicação. O ORM funcionam para facilitar o cotidiano de desenvolvimento.
- O ORM é responsável por se conectar ao banco, converter os métodos e funções em queries e resolver as queries com o banco.  
- ORMs oferecem uma interface única, que pode ser utilizada para vários bancos de dados relacionais diferentes. Ao usar um ORM para escrever a aplicação, o ORM fará toda a “tradução” para linguagem do banco e resolverá os comandos e queries. Se for necessário migrar de um banco SQL para outro, é possível fazer isso sem mudanças no código.
Dessa forma o **Sequelize** suporta diversos bancos de dados relacionais como PostgreSQL, MySQL, SQLite e MSSQL. Com o Sequelize, é possível mapear objetos do JavaScript para tabelas do banco de dados e realizar operações de CRUD (Create, Read, Update, Delete) utilizando apenas JavaScript, sem a necessidade de escrever queries em SQL.

## Aula 01 - Conclusão - Nesta aula, aprendemos

Criar um novo projeto do zero com Sequelize;
Fazer configurações necessárias no projeto;
A subir um servidor local básico com Express e Nodemon;
Fazer a instalação do MySQL e como acessar via terminal.
Criar um novo banco de dados e conectá-lo à aplicação.

## Aula 02 - Modelos, Migrações e Seeds

Comando usado para cria nossa primeira tabela(Pessoas) através do Sequilize(cli)
> npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

Esta aula foi usado bastantes comandos no terminal, então não tem como descrever muita coisa o ideal é assistir as aulas novamente se necessário.

## Aula 02 - Conclusão - Nesta aula, aprendemos

Criar modelos e arquivos de migração via terminal
O que são e para que servem migrações com ORMs
Executar migrações para criação de tabelas no banco
Popular tabelas automaticamente através de arquivos seed

## Aula 03 - Controladores e Rotas

Basicamente este cursa esta desenvolvendo o mesmo que foi feito no curso anterior com MongoDB, só que agora usando o DB relacional SQL, como ão tem a aluri(IA) para resumir eu vou prosseguir e se for necessário eu volto e assisto as aulas novamente.

## Aula 03 - Conclusão - Nesta aula, aprendemos:
Como funciona o modelo MVC
O que é e para que serve a camada de controle
A criar um controlador
Como usar métodos do Sequelize para consultar o banco
A separar a responsabilidade das rotas para termos uma aplicação organizada
Como criar uma rota para o modelo Pessoas
A chamar um método do controlador Pessoas através da rota com o verbo HTTP GET




## Aula 04 - CRUD com Sequelize
## Aula 04 - Conclusão - Nesta aula, aprendemos a:
Utilizar outros métodos do Sequelize para as operações de CRUD
Enviar dados através de parâmetros de requisição HTTP
Enviar dados através do corpo da requisição HTTP
Criar rotas para cada operação
Associar as rotas a cada método do controlador Pessoas



## Aula 05 - Relações e Associações
> O comando para criar os modelos dos arquivos de migração é: **npx sequelize-cli model:create**  
> O comando para gerar a tabela no banco é: **npx sequelize-cli db:migrate**

## Aula 05 - Modelos e Migrações - Video 1
Criando os modelos e os arquivos de migrações para essas outras três tabelas
 - npx sequelize-cli model:create –name Niveis –attributes descr_nivel:string
 - npx sequelize-cli model:create –name Turmas –attributes data_inicio:dateonly
 - npx sequelize-cli model:create –name Matriculas –attributes status:string

> Para incluir um novo atributo no modelo existente: nome_atributo: DataTypes.STRING  
É necessário rodar novamente o comando de migração para fazer a alteração no banco.  
Utilizamos o comando de migração no ORM para fazer alterações rastreáveis no banco. As migrações ficam indexadas em sequelizeMeta e podem ser revertidas, mas não é preciso desfazer a migração anterior para fazer uma nova alteração no banco, como adicionar uma coluna. É só rodar um novo comando de migração para adicionar as alterações.


## Aula 05 - Fazendo associações - Video 2
Então as relações que temos na nossa tabela são relações de um para vários, de one to many. Como fazemos para usar os métodos do Sequelize para dizer isso no nosso código? O Sequelize diz também, está em inglês, mas vamos juntos, que has many, “tem muitas”, uma tradução bem livre do nome desse método, essa associação significa que uma relação de um para vários existe entre as tabelas A e B.  
Então, entre as tabelas A e B há vários, podemos usar o método hasMany. Ele diz também que a chave estrangeira, a FK, tem que ser definida na tabela, no modelo B, que é o modelo que está sendo passado por parâmetro do método. Então, vamos copiar A.hasMany(B) e passar para o nosso código, e ver como traduzimos esse exemplo.
> Exemplo:  
Turmas.hasMany(models.Matriculas, {foreignKey: 'turma_id'});


## Aula 05 - Referenciando Tabelas - Video 3
Se olharmos a documentação do Sequelize, ela traz que as associações são feitas. Para criar uma relação de um para vários, eu tenho que usar o método hasMany, “tem vários”, e “pertence a”, usar os dois juntos. Só usamos o hasMany, vamos agora inserir o “pertence a”. Só que vamos inserir o “pertence a” do outro lado da relação.  
Eu vou copiar um exemplo: Bar.belongsTo(Foo), e vamos adicionar o método belongsTo do outro lado das relações. Então vou adicionar em Matrículas para Pessoas, Matrículas para Turma, Turma para Pessoas e Turma para Nível.
> Exemplo:  
Matriculas.belongsTo(models.Turmas, {foreignKey: 'turma_id'});

Agora, podemos rodar as migrações e ver se o Sequelize conseguiu conectar no banco e criar as tabelas. Então npx sequelize-cli db:migrate é o comando.
> Exemplo:
npx sequelize-cli db:migrate


## Aula 05 - Populando Tabelas - Video 4
Já sabemos como popular tabelas utilizando, utilizando os arquivos de seed. sabemos qual é o comando porque usamos para fazer o seed de pessoas. 
> Exemplo: 
npx sequelize-cli seed:generate --name demo-nivel

hora que rodar o seeds. Então, faremos isso agora e quando criarmos os seeds, vamos ao banco e vemos se está tudo certo, vemos se foi tudo criado do jeito que passamos para o Sequelize.
> Exemplo:
npx sequelize-cli db:seed:all

## Aula 05 - Conclusão - Nesta aula, aprendemos a:
Interpretar o diagrama de banco
Identificar os tipos de relação pedidos no projeto
Associar tabelas através de métodos do Sequelize
Referenciar tabelas associadas
Migrar tabelas associadas
Popular tabelas associadas



## Aula 06 - Controladores
## Aula 06 - Nesta aula, aprendemos a:
Adicionar novos controladores;
Trabalhar com mais de um modelo no mesmo controlador;
Enviar dados via parâmetros e corpo das requisições;
Utilizar estes dados para encontrar informações no banco;
Gerar estruturas de dados do tipo JSON com informações úteis ao usuário.