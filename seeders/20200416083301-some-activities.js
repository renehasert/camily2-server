"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "activities",
      [
        {
          type: "Leisure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Sport",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Birthday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Family day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Meeting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("activities", null, {});
  },
};
