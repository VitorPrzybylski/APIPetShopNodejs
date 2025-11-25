# APIPetShopNodejs
Uma api para reforçar os conhecimentos de backend envolvendo APIs


     PASSO A PASSO   

INICIO
    1-npm init;
    2-npm i --save-dev jest cross-env (teste)
    3-npm install express (rotas)
    4-npm install sequelize mysql2 (banco)
    5-criar pasta src
    6-criar pastas dentro da src (config,controller, model, router,service)
    7-criar um arquivo chamado NomeDoTrabalho.js dentro de cada um deles (menos Config)
    8-criar um arquivo chamado database.js dentro da pasta config
    9-criar um arquivo index.js fora do src
    10-Começar no index.js
    11-criar o banco no localhost com o nome da api, ex: petshop.
    12-criar cada uma das rotas no Postman.

DATABASE:
    13-começar linkando o banco no database 
    14-importar o Sequelize do sequelize
    15-class Database{} (local onde vai quase tudo no database)
    16-constructor(){}  (fazer o contrutor dentro da classe)
    17-adicionar this.init() dentro do construtor
    18-fora do contrutor, porem dentro do database;
    19-criar o init(){} funçao de apontar e dar acesso ao banco correto
    20-dentro do init fazer um this.db = new sequelize({})
    21-dentro das chaves, adicionar as chaves de acesso do banco
    22-database: 'nomeDoBanco',
    23-host: 'localhost',
    24-username: 'root',
    25-password: '', (nao colocar senha, pelo menos nao em ambiente de estudo)
    26-dialect:'mysql'
    27-exportar defaut o novo database

MODEL //criar os campos dentro da tabela escolhida
    28-importar o database
    29-criar uma class NomeDaTabela{}
    30-iniciar um contrutor(){}
    31-chamar um this.model = database.db.define('NomeDaTabela',{})
    32-colocar dentro das chaves do this os campos e suas propriedades
    33- id:{},
    34-dentro das chaves do id type: database.db.Sequelize.INTEGER,
    35-primaryKey:true, autoIncrement: true
    36-criar os outros campos da tabela, nome, disponivel, qtde, (apenas fazer a primeira parte; NomeDaColuna type: database.db.Sequelize.(tipo da coluna? boleana, string, intera, real) )
    37-depois de terminar tudo, exportar tudo default new NomeDaClass().model

Service //onde a brincadeira começa
    38-começar importando a class criada na model da model
    39-criar class ServiceTabela
    40-criar uma funçao async para cada uma das funçoes do crud(findAll, findOne, create, update,delete)
    41-findAll(){} return Produto.findAll() //
    42-
    43-
    44-
    45-
    46-
    47-
    48-
    49-
    50-
    51-
    52-