"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      day: { type: DataTypes.INTEGER, allowNull: false },
      month: { type: DataTypes.INTEGER, allowNull: false },
      year: { type: DataTypes.INTEGER, allowNull: false },
      recurrence: { type: DataTypes.STRING, allowNull: true },
      startTime: { type: DataTypes.STRING, allowNull: true },
      endTime: { type: DataTypes.STRING, allowNull: true },
    },
    {}
  );
  event.associate = function (models) {
    event.belongsTo(models.user);
    event.belongsTo(models.member);
    event.belongsTo(models.activity);
  };
  return event;
};
