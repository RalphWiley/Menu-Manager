'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Favorite = Sequelize.define('Favorite', {
    restaurant: {
      type: DataTypes.STRING,
    },
    itemName: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  Favorite.associate = (models) => {
    Favorite.belongsToMany(models.User, {
      through: 'UserFavorite',
      onDelete: 'CASCADE',
    })
  };

  return Favorite;
};