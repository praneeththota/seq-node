const koaRouter = require('koa-router')
const router = new koaRouter()
const Koa = require('koa')
var app = new Koa();
var db = require('./models/index')
const bodyParser = require('koa-bodyparser');
let schema = require('./user_schema')
const graphqlHTTP = require('koa-graphql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/seq-node');
// body parser

const  { graphiqlKoa, graphqlKoa } = require('apollo-server-koa');
app.use(bodyParser());
router.use(bodyParser());

/**
 * @api {get} /users List all users test
 * @apiName GetUsersList
 * @apiVersion 0.3.0
 * @apiGroup Users
 * @apiSuccess {Object[]} users Users's list
 * @apiSuccess {Number} users.id User id
 * @apiSuccess {String} users.firstName User FirstName
 * @apiSuccess {String} users.lastName User lastName
 * @apiSuccess {Date} users.updated_at Update's date
 * @apiSuccess {Date} users.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "firstName": "Praneeth",
 *      "lastName": "Thota",
 *      "Email": "praneeth.thota@pnmac.com",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/users', async (ctx) => {
  var users = await db.User.findAll()
   ctx.body = users;
})
router.get('/user', async (ctx) => {
  console.log(ctx.request.query.id)
  var user = await db.User.findOne({where: {id: ctx.request.query.id}})
   ctx.body = user;
})

router.get('/user_versions', async(ctx) => {
  // const versionsByInstance = await db.Revisions.findAll();
  // ctx.body = versionsByInstance
  var users = await sequelize.query('select * from "Revisions"')
  ctx.body = users;

})
router.put('/update_user', async(ctx) => {
  // await db.User.update(
  //   { firstName: ctx.request.query.firstName },
  //   { where: { id: ctx.request.query.id } }
  // ).then({ function(result){
  //   return user;
  // }
  // });

  const user = await db.User.findOne({where: {id: ctx.request.query.id}})
  // now we change a name
  user.firstName = ctx.request.query.firstName;
  // update 
  await user.save();
  return user;
})
router.post('/register', async(ctx) => {
  user  = db.User.create({
    firstName: ctx.request.body.firstName,
    lastName: ctx.request.body.lastName,
    email: ctx.request.body.email,
    password: ctx.request.body.password,
    username: ctx.request.body.username,
    createdAt: new Date(),
    updatedAt: new Date(),
    data: ctx.request.body.data
  })
  ctx.body = "register success again " + JSON.stringify(ctx.request.body.firstName)
})


router.all('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


module.exports = router;