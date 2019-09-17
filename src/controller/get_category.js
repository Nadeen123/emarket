const getCategoriesQuery = require('../database/queries/get_category')

const getCategories = (req, res) => {
  getCategoriesQuery()
    .then(data => res.json(data))
    .catch(() => res.status(500).json({ err: 'error for get catogery' }))
}
module.exports = getCategories
