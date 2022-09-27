const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.json({msg: 'mensajes'})
}

const hiMessage = (req = request, res = response) => {
    res.json({msg:'Hola mundo'})
}

const byeMessage = (req = request, res = response) => {
    res.json({msg:'Adios mundo'})
}
const postMessage = (req = request, res = response) => {
    res.json({msg:'mensaje pot'})
}
const putMessage = (req = request, res = response) => {
    res.json({msg:'mensaje put '})
}
const deleteMessage = (req = request, res = response) => {
    res.json({msg:'mensaje delete'})
}

module.exports = {
    rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}