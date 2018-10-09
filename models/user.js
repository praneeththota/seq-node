'use strict';
const Sequelize = require('sequelize');
const Version = require('sequelize-version');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/seq-node');
const User = sequelize.define('User', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  username: Sequelize.STRING,
  data: Sequelize.JSON
});
const UserVersion = new Version(User);
sequelize.sync({
  logging: console.log("creating versioning")
})
//customization examples
const customOptions = {
    
 
 
  //attributes to ignore from origin model
  //exclude: ['id', 'lastName', 'email', 'password', 'username', 'data', 'updatedAt', 'createdAt', 'version_timestamp'] 

}
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
  const UserVersion = new Version(User);
  return User;

};
