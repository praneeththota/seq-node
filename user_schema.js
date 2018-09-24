const graphql = require('graphql')
const { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLNonNull, 
  GraphQLList 
} = graphql
const graphSequel = require('graphql-sequelize');
var db = require('./models/index')
const { User } =  db.User


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString},
    username: {type: GraphQLString}
  })
})
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLInt}},
      resolve(parent, args){
        //return _.find(users, {id: args.id})
        return db.User.findOne({where: {id: args.id}})
      }

    }
  }
})

module.exports =  new graphql.GraphQLSchema({
  query: RootQuery
})