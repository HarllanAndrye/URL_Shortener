# Back-end

Tecnologias utilizadas:
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/): foi utilizada a versão 13.1 para Windows x64.

Para baixar as dependências utilize o comando:
```
npm install
```

Necessário instalar o TypeScript globalmente, assim:
```
npm install typescript -g
```

Para rodar a aplicação:
```
npm start
```
A aplicação irá rodar em: `http://localhost:3001`.

Os endpoints são:
- /links
- /links/:code
- /links/:code/stats

As configurações de conexão com o banco de dados devem estar no arquivo `.env`.
Há um exemplo de configuração no arquivo `.env_example`.

O banco de dados tem que ser criado antes de rodar a aplicação, por exemplo:
```
	CREATE DATABASE url_shortener
		WITH 
		OWNER = postgres
		ENCODING = 'UTF8'
		LC_COLLATE = 'Portuguese_Brazil.1252'
		LC_CTYPE = 'Portuguese_Brazil.1252'
		CONNECTION LIMIT = -1;
```

Assim que inicia a aplicação a tabela é criada pelo "sequelize", caso não exista.