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
    dish1: {
      type: DataTypes.STRING,
    },
    itemDescription1: {
      type: DataTypes.STRING,
    },
    dish2: {
      type: DataTypes.STRING,
    },
    itemDescription2: {
      type: DataTypes.STRING,
    },
    dish3: {
      type: DataTypes.STRING,
    },
    itemDescription3: {
      type: DataTypes.STRING,
    },
    dish4: {
      type: DataTypes.STRING,
    },
    itemDescription4: {
      type: DataTypes.STRING,
    },
    dish5: {
      type: DataTypes.STRING,
    },
    itemDescription5: {
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