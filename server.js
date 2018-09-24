const Basicroutes = require('./routes')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
var app = new Koa();
const schema  = require('./schema')
const  { graphiqlKoa, graphqlKoa } = require('apollo-server-koa');
var PORT = 8080;


app.use(Basicroutes.routes())
app.use(bodyParser())
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;