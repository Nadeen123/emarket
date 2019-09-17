const dbConnection = require('../db_connection')

const getCategory = () =>
  dbConnection
    .query('SELECT * FROM catery')
    .then(res => res.rows)
    .catch(err => next(err))

module.exports = getCategory
