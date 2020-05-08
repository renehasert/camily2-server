const Mutation = {
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
};

module.exports = Mutation;
