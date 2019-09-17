const getCategoriesQuery = require('../database/queries/get_category')

const getCategories = (req, res) => {
  getCategoriesQuery()
    .then(data => res.json(data))
    .catch(err => next(err))
}
module.exports = getCategories
