const Sequelize = require('sequelize');
const sequelize = require('./connection');
module.exports = sequelize.define('note', {
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