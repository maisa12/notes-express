'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('papers', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      paper_name: {
        type: Sequelize.TEXT
       },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('papers')
  }
};
