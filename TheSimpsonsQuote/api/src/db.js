require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path')
// import { native } from 'pg';
const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/thesimpsonsquotes`, {
  logging: false,
  native: false
});
// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// modelDefiners.forEach(model => model(sequelize));

// let entries = Object.entries(sequelize.models);
// let capEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { Country, Activity } = sequelize.models;
const Users = require('./models/Users')
Users(sequelize)


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Country.belongsToMany(Activity, { through: 'countryActivity', timestamps: false });
// Activity.belongsToMany(Country, { through: 'countryActivity', timestamps: false })

module.exports = {
  ...sequelize.models,
  conn: sequelize
}