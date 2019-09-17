const dbConnection = require('../db_connection')

const getCategory = () => dbConnection
  .query('SELECT * FROM category')
  .then(res => res.rows)
  .catch(err => err)
module.exports = getCategory
