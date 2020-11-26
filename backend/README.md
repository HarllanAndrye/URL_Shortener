# Back-end

Tecnologias utilizadas:
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize ORM](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

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

As configurações de conexão com o banco de dados estão no arquivo `src/database.ts`.