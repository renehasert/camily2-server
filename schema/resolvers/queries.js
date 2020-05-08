const Query = {
  async getUser(root, { id }, { models }) {
    return await models.user.findOne({
      where: { id },
    });
  },
  async getAllEvents(root, args, { models }) {
    return await models.event.findAll();
  },
  async getMember(root, { id }, { models }) {
    return await models.member.findByPk(id);
  },
  async getBirthday(root, { month, activityId }, { models }) {
    return await models.event.findAll({
      where: { month, activityId },
    });
  },
};
module.exports = Query;
