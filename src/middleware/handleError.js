// exports.pageNotFound = (err, req, res, next) => {
//   res.status(404).json({
//     message: 'page not found rand'
//   })
// }

exports.serverError = (err, req, res, next) => {
  res.status(500).send({
    message: 'intenal server error rand'
  })
}
