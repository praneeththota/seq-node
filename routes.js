const koaRouter = require('koa-router')
const router = new koaRouter()
const Koa = require('koa')
var app = new Koa();
var db = require('./models/index')
const bodyParser = require('koa-bodyparser');

// body parser
app.use(bodyParser());
router.use(bodyParser());

router.get('/users', async (ctx) => {
  var users = await db.User.findAll()
   ctx.body = users;
})
router.post('/register', async(ctx) => {
  user  = db.User.create({
    firstName: ctx.request.body.firstName,
    lastName: ctx.request.body.lastName,
    email: 'praneeth.thota@pnmac.com',
    password: 'test',
    username: 'pthota',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  ctx.body = "register success again " + JSON.stringify(ctx.request.body.firstName)
})
module.exports = router;