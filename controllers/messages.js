const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.status(404).json({msg: 'mensajes'})
}

const hiMessage = (req = request, res = response) => {
    res.status(403).json({msg:'Hola mundo'})
}

const byeMessage = (req = request, res = response) => {
    res.status(501).json({msg:'Adios mundo'})
}
const postMessage = (req = request, res = response) => {
    res.status(401).json({msg:'mensaje pot'})
}
const putMessage = (req = request, res = response) => {
    res.status(504).json({msg:'mensaje put '})
}
const deleteMessage = (req = request, res = response) => {
    res.status(407).json({msg:'mensaje delete'})
}

module.exports = {
    rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}