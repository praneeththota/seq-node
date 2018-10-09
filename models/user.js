'use strict';
const Sequelize = require('sequelize');
const Version = require('sequelize-version');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/seq-node');

var PaperTrail = require('sequelize-paper-trail').init(sequelize,  {});
PaperTrail.defineModels({});

sequelize.sync({
  logging: console.log("creating versioning")
})

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
  User.Revisions = User.hasPaperTrail();
  User.associate = function(models) {
    // associations can be defined here
  };
 return User;

};
