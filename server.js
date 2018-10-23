const Basicroutes = require('./routes')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
var app = new Koa();
const  { graphiqlKoa, graphqlKoa } = require('apollo-server-koa');
// serving static files
const serve = require('koa-static');
app.use(serve('./public'));

var PORT = 8080;


app.use(Basicroutes.routes())
app.use(bodyParser())
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;