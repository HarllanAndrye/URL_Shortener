import { Sequelize } from 'sequelize';

/**
 * String de conexão
 * 
 * mysql: tipo do banco de dados
 * root: usuário do BD
 * 12345678: senha do usuário do BD
 * localhost:3306: onde estar o BD e a porta de conexão
 * url_shortener: nome do BD
 */
const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/url_shortener');

export default sequelize;