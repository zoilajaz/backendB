const express = require('express')
const messagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')
const animeRouter = require ('./routes/anime')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            messages: "/api/v1/messages",
            usuarios: "/api/v1/usuarios",
            anime: "/api/v1/anime"
        }
        this.middleware()
        this.routes()
    }
    routes(){ ','
        //this.app.get('/', (req, res) => {
            //res.send('Mensaje recibido')
       // }) //End point

       this.app.use(this.paths.messages, messagesRouter)
       this.app.use(this.paths.usuarios, usuariosRouter)
       this.app.use(this.paths.anime,animeRouter)
    }
    
    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}
module.exports = Server



