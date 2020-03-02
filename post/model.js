const Sequelize = require('sequelize')
const db = require('../db.js')

const Post = db.define(
  'post',
  {
    text: Sequelize.STRING
  }
)

module.exports = Post