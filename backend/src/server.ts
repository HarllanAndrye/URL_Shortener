import app from './app';
import database from './database';


/**
 * force: true
 *    Usado apenas em ambiente dev para forçar a criação das tabelas no BD.
 *    Ele destroi e recria as tabelas.
 */
//database.sync({ force: true });
database.sync(); // Inicializando a conexão com o bando de dados
console.log('Database running...'); //at 3306

// Comando para rodar (subir) o app
app.listen(process.env.PORT || 3001); // 3001 é a porta que o app estará "escutando" em ambiente de desenvolvimento
console.log('Server running...'); //at 3001