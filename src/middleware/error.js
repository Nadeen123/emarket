exports.serverError = (err, req, res, next) => {
  console.log(err.message)
  res.status(500).send({
    message: 'intenal server error rand'
  })
}
