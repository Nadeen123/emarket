// exports.pageNotFound = (err, req, res, next) => {
//   res.status(404).json({
//     message: 'page not found rand'
//   })
// }

exports.serverError = (err, req, res, next) => {
  console.log('hereeeeeee', res)
  res.status(500).json({
    message: 'intenal server error fdhgk'
  })
}
