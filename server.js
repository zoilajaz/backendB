const cors = require('cors')
const express = require('express')
const messagesRouter = require('./routes/messages')
const UsuariosRouter = require('./routes/Usuarios')
const animeRouter = require('./routes/anime')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            messages: "/api/v1/messages",
            Usuarios: "/api/v1/Usuarios",
            anime: "/api/v1/anime"
        }
        this.middlewares()
        this.routes()
    }
    routes(){ ','
        //this.app.get('/', (req, res) => {
        //res.send('Mensaje recibido')
       // }) //End point

       this.app.use(this.paths.messages, messagesRouter)
       this.app.use(this.paths.Usuarios, UsuariosRouter)
       this.app.use(this.paths.anime, animeRouter)
 }
    middlewares(){
        this.app.use(cors())// habilita origen curzado
        this.app.use(express.json())
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}
module.exports = Server



