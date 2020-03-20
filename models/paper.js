const Sequelize = require('sequelize');
const sequelize = require('./connection');
module.exports = sequelize.define('paper', {
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