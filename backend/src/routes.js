const express = require("express")
const routes = express.Router()
const controller = require("./controllers/controller")



routes.get('/mensagem',controller.simpleMessage)
routes.get('/login',controller.Login)



module.exports = routes