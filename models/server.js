const express = require('express')
const dbConnect = require('../database/config')
const { getExports, postExports } = require('../controllers/exportController')
const port = process.env.PORT || 3000

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.pathExport = '/api-export'

        this.middlewares()
        this.routes()
        this.dbConnection()
    }

    async dbConnection() {
        await dbConnect()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes(){
        this.app.get(this.pathExport, getExports),
        this.app.post(this.pathExport, postExports)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`The server is running at http://localhost:${port}`);
        })
    }
}

module.exports = Server