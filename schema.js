const { resolver } = require('graphql-sequelize')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql')
var db = require('./models/index')
const { User } =  db.User
//Define User type
const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the user.',
    },
    firstName: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    lastName: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    email: {
      type: GraphQLString,
      description: 'email of the user.',
    },
    password: {
      type: GraphQLString,
      description: 'Password of the user.',
    }
  }
})

//schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'root',
    fields: {
      users: {
        type: new GraphQLList(userType),
        resolve: resolver(User)
      }
    }
  })
})
module.exports = schema