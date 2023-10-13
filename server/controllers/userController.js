const ApiError = require("../error/ApiError")

class UserController {
  async registration (req, res) {
    
  }

  async login (req, res) {

  }

  async checkLogin (req, res, next) {
    const {id} = req.query
    if (!id) { 
      return next(ApiError.badRequest('No id'))
    }

    res.json(id)
  }
  
}

module.exports = new UserController()