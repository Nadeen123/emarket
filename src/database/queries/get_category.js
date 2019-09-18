const dbConnection = require('../db_connection')

const getCategory = (err, req, res, next) =>
  dbConnection
    .query('SELECT * FROM categor')
    .then(res => res.rows)
    .catch(() => {
      console.log('hereeeeeeeee11111')
      next(err)
    })

module.exports = getCategory
