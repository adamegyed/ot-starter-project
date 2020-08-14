const fs = require('fs');

require('dotenv-safe').config({
  allowEmptyValues: true,
});

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      // prevent sequelize from pluralizing table names
      freezeTableName: true,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      // prevent sequelize from pluralizing table names
      freezeTableName: true,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      // prevent sequelize from pluralizing table names
      freezeTableName: true,
    },
  },
};