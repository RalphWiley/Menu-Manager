'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Favorite = Sequelize.define('Favorite', {
    restaurant: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    dish: {
      type: DataTypes.STRING,
    },
    itemDescription: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    }
  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  };

  return Favorite;
};