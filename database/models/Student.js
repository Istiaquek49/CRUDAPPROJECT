const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'First Name'
  },
  
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Last Name'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'redacted@email.com',
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  gpa: {
    type: Sequelize.DECIMAL,
    defaultvalue: 0.0,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

});

module.exports = Student;