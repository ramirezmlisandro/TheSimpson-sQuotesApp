const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Users', {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,

    }
  }, { timestamps: false });
}