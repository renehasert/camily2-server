const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type user {
    id: Int!
    name: String!
    email: String!
    member: [member]
  }
  type member {
    id: Int!
    firstName: String!
    gender: String!
    birthday: String!
    colour: String!
    parent: Boolean!
    user: user
  }
  type activity {
    id: Int!
    type: String!
  }
  type event {
    id: Int!
    title: String!
    description: String!
    date: String!
    day: Int!
    month: Int!
    year: Int!
    recurrence: String
    startTime: String
    endTime: String
    activity: activity
    activityId: Int
    member: member
    memberId: Int
    userId: Int!
    user: user
  }
  type Query {
    getUser(id: Int!): user!
    getAllEvents: [event]
    getMember(id: Int!): member
    getBirthday(month: Int!, activityId: Int!): [event]
  }
  type Mutation {
    createEvent(
      title: String!
      description: String!
      date: String!
      day: Int!
      month: Int!
      year: Int!
      recurrence: String!
      startTime: String!
      endTime: String!
      activityId: Int!
      memberId: Int!
      userId: Int!
    ): event!
    createMember(
      firstName: String!
      gender: String!
      birthday: String!
      colour: String!
      parent: Boolean!
      userId: Int!
    ): member!
  }
`;

module.exports = typeDefs;
