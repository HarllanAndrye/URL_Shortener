import Sequelize, { Optional, Model } from 'sequelize';
import { Link } from './link-model';
import database from '../database';

// Quando for criar um novo link, o id é opcional
interface ILinkCreationAttributes extends Optional<Link, "id"> { };

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link { }

// Criando a definição da tabela (entidade)
const LinkModel = database.define<ILinkModel>('link', {
  id: {
    type: Sequelize.INTEGER, // apenas inteiros positivos
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  code: {
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false
  },
  hits: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

export default LinkModel;
