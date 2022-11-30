const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('favourites', {
    id: {
      type: DataTypes.UUID , 
      default: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    quote: {
      type: DataTypes.TEXT,
      alowNull: false,
    },
    character: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    characterDirection: {
      type: DataTypes.ENUM(['Left', 'Right']),
      allowNull: true,
    }
  }, {
    timestamps: false
  });
};