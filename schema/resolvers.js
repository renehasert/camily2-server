const Query = require("./resolvers/queries");
const Mutation = require("./resolvers/mutations");
const Subscription = require("./resolvers/subscriptions");

const resolvers = {
  Query,
  Mutation,
  // Subscription,
  event: {
    async member(member) {
      return member.getMember();
    },
    async activity(activity) {
      return activity.getActivity();
    },
    async user(user) {
      return user.getUser();
    },
  },
  member: {
    async user(user) {
      return user.getUser();
    },
  },
  user: {
    async member(member) {
      return member.getMembers();
    },
  },
};

module.exports = resolvers;
