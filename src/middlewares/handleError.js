const { ValidationError } = require("express-validation")

module.exports = (error, req, res, next) => {
  if(error instanceof ValidationError){
    return res.status(error.statusCode).json(error)
  }

  else if(error instanceof ReferenceError){
    return res.status(error.status).json(error)
  }

  return res.status(500).json(error)
}