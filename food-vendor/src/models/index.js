import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { wrapSequelize } from '../sqlcommenter/nodejs/sqlcommenter-nodejs/packages/sqlcommenter-sequelize';

const basename = path.basename(__filename);
const db = {};

const config = require('../sequelizeconfig').default;

let sequelize = new Sequelize(config.database, config.username, config.password, config);
wrapSequelize(sequelize, {}, {TracerProvider: 'OpenTelemetry'});

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    if (Array.isArray(model)) {
      model.forEach((md) => {
        db[md.name] = md;
      });
    } else {
      db[model.name] = model;
    }
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;