//import { Router } from "express"
const { Router } = require("express")

const routes = new Router()

routes.get('/',(request,response) => {
    return response.json({message: "hello word"})
})

module.exports = routes