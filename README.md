###

# WA-CLINIC

Projeto open source, criado para testar conhecimentos :D 

## Como rodar o projeto:
  - Criar um arquivo .env dentro da pasta da api, ver o .env example para conexão local
  - Na pasta raiz executar um `yarn install`
  - Criar uma pasta `/data` dentro da raiz e é necessário atribuir permissão para o usuário do docker consiga armazenar os dados do banco na pasta /data. Por exemplo: `sudo chown -R $USER wa-clinic` 
  - Executar docker-compose up --build para que os containers sejam buildados
  - Conectar ao banco de dados e executar os scripts para criação das tabelas no banco utilizado no .env. Importante lembrar, no arquivo de scripts é considerado que o usuário padrão se chama "postgres" caso, você utilize outro usuário, alterar para as linhas para `OWNER to seu_usuario;`

## Documentação:
Importar o arquivo `wa-clinic-docs.json` na plataforma insomnia: https://insomnia.rest/download

## Arquitetura: 
  - Api: Diretório pai da api
    - config: Diretórios de configuração
    - controllers: Controllers responsáveis por receber as requisições http
    - repository: Arquivos responsáveis pela camada de persistência e busca de informações com o banco
    - routes: Definição das rotas
    - services: Arquivos responsáveis pela camada intermediária entre a requisição e o banco de dados
    - utils: Scripts diversos
  - data: Diretório em que o docker deve armazenar o conteúdo do banco de dados
  - database_scruture.sql : Arquivo que contém os scripts para serem executados
  - docker-compose: Definição dos containers
  - wa-clinic-docs-json:

###

