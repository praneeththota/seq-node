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
const _ = require('lodash')
// dummy data
var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: 1, userId: 2 },
  { name: 'The Final Empire', genre: 'Fantasy', id: 2, userId: 2 },
  { name: 'The Hero of Ages', genre: 'Fantasy', id: 4, userId: 2 },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: 3, userId: 3 },
  { name: 'The Colour of Magic', genre: 'Fantasy', id: 5, userId: 3 },
  { name: 'The Light Fantastic', genre: 'Fantasy', id: 6, userId: 4 },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ( ) => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      user: {
          type: UserType,
          resolve(parent, args){
            return db.User.findOne({where: {id: parent.userId}})
          }
      }
  })
});
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString},
    username: {type: GraphQLString},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return _.filter(books, { userId: parent.id });
      }
}
  })
})
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLInt}},
      resolve(parent, args){
        return db.User.findOne({where: {id: args.id}})
      }

    },
    // fetch all users
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args){
          return db.User.findAll();
      }
    },
    // fetch book
    book: {
      type: BookType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args){
          return _.find(books, { id: args.id });
      }
    },
    // fetch all books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
          return books;
      }
    }
  }
})

// mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      addUser: {
          type: UserType,
          args: {
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString }
          },
          resolve(parent, args){
              return db.User.create({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email
              });
          }
      },
      // update user
      updateUser: {
        type: UserType,
        args: {
          id: {type: GraphQLInt},
          firstName: {type: GraphQLString},
          lastName: {type: GraphQLString},
          email: {type: GraphQLString}
        },
        resolve: async (obj, args) => {
          user = await db.User.update(
            { firstName: args.firstName },
            { where: { id: args.id } }
          );
          return user;
        }
      }
      
  }
});

module.exports =  new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})