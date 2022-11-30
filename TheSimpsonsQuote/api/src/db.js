require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/thesimpsonsquotes`, {
  logging: false,
  native: false
});


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { Country, Activity } = sequelize.models;

// const Users = require('./models/Users')
const Favourites = require('./models/Favourites.js')
// Users(sequelize);
Favourites(sequelize);



// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Country.belongsToMany(Activity, { through: 'countryActivity', timestamps: false });
// Activity.belongsToMany(Country, { through: 'countryActivity', timestamps: false })

module.exports = {
  ...sequelize.models,
  db: sequelize
};