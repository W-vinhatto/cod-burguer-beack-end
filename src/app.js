//import express from express
const express = require("express")
//import routes from "./routes"
const routes = require("./routes")

class App {
    constructor(){
        this.app = express()
        this.middlawares()
        this.routes()
    }

    middlawares(){
        this.app.use(express.json())

    }

    routes(){
        this.app.use(routes)
    }

}

module.exports = new App().app    

