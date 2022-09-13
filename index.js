require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', (req, res)=> {
     res.send('mensaje recibido')
}) // end point
app.listen(process.env.PORT,() => {
      console.log('servidor corriendo en el puerto', process.env.PORT)
})