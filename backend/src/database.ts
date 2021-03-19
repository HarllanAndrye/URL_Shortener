import { Sequelize } from 'sequelize';

//console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialectOptions: {
    ssl: true
  }
});

export default sequelize;