const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Campus Name'
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'unknown address'
   },
  description: {
    type: Sequelize.TEXT('large'),
  }

});

module.exports = Campus;