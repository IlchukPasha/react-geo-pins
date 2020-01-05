const { gql } = require('apollo-server');

//mongodb_admin    Nb45fOlDHCWi17Wo

module.exports = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    picture: String!
  }

  type Pin {
    _id: ID!
    title: String!
    content: String!
    image: String!
    latitude: Float!
    longitude: Float!
    createdAt: String!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    text: String!
    createdAt: String!
    author: User!
  }

  type Query {
    me: User
  }
`;