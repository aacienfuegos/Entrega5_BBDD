'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Scores', [
      {
		wins: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
		wins: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
		wins: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
		wins: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Scores', null, {});
  }
};
