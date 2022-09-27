// http:localhost:4000/api/v1/messages

const {Router} = require('express') 


const router = Router()
const { 
    rootMessage,
     hiMessage, 
     byeMessage,
     postMessage,
     putMessage,
     deleteMessage
 } = require('../controllers/messages')


router.get('/', rootMessage) //End point
router.get('/hi', hiMessage) //End point
router.get('/bye', byeMessage) //End point

router.post('/', postMessage)
router.put('/', putMessage)
router.delete('/', deleteMessage)
module.exports = router