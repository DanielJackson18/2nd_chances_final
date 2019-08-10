module.exports = function(sequelize, DataTypes) {
  const Sequelize = require('sequelize');
      var Animals = sequelize.define("animals", {
      description: DataTypes.TEXT,
          type: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey: true
          },
          breed: {
              type: Sequelize.STRING,
              allowNull: false,
              required: true
          },
          sex: {
              type: Sequelize.STRING,
              allowNull: false,
              require: true
          },
          age: {
              type: Sequelize.INTEGER(11),
              allowNull: false,
              required: true
          },
          size: {
              type: Sequelize.STRING,
              allowNull: false,
              defaultValue: 0.0
          },
          color: {
              type: Sequelize.STRING,
              allowNull: false,
              defaultValue: 0.0
          },
          
    });
    return Animals;
  };