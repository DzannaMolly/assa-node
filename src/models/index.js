import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Products: connection.import('../products/model'),
  Status: connection.import('../status/model'),
  
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

//Relations
models.Products.belongsTo(models.Status);
models.Status.hasMany(models.Products);

models.connection = connection;
models.Sequelize = Sequelize;

export default models;
