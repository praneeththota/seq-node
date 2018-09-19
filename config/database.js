// const path = require('path');
// var pg = require('pg');
// var conString = "postgres://postgres:root@localhost:5432/ldap-auth";

// var client = new pg.Client(conString);
// client.connect();
// module.exports = client;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/seq-node');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });