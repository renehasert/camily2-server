const resolvers = {
  Query: {
    async getUser(root, { id }, { models }) {
      return models.user.findByPk(id);
    },
    async getAllEvents(root, args, { models }) {
      return models.event.findAll();
    },
    async getMember(root, { id }, { models }) {
      return await models.member.findByPk(id);
    },
  },
  Mutation: {
    async createEvent(
      root,
      {
        title,
        description,
        date,
        day,
        month,
        year,
        recurrence,
        startTime,
        endTime,
        activityId,
        memberId,
        userId,
      },
      { models }
    ) {
      return models.event.create({
        title,
        description,
        date,
        day,
        month,
        year,
        recurrence,
        startTime,
        endTime,
        activityId,
        memberId,
        userId,
      });
    },
    async createMember(
      root,
      { firstName, gender, birthday, colour, parent, userId },
      { models }
    ) {
      return models.member.create({
        firstName,
        gender,
        birthday,
        colour,
        parent,
        userId,
      });
    },
  },
  user: {
    async member(member) {
      return member.getMember();
    },
  },
  event: {
    async user(user) {
      return user.getUser();
    },
  },
};

module.exports = resolvers;
