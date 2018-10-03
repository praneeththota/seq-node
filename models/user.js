'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    data: DataTypes.JSON
  }, {
    //tableName: 'Users'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};