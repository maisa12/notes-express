'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notes', {
     id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
     },
     done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      note:{
        type: Sequelize.TEXT
      },
      paper_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
 })
   },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('note')
  }
};

