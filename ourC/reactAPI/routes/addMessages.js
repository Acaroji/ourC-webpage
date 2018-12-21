const express = require('express')
const router = express.Router()

var Message = require('../models/Messages');

router.post('/add', (req, res) => {
    debugger
    console.log(req.body);
    let newMessage = new Message({
        from:req.body.from,
        message:req.body.message
    })

    newMessage.save(req.body).then(saved=>{
        console.log("Hello", saved)
        res.send({message:saved})
    }).catch(err =>{
        res.send(err)
    })

})

router.get('/get', (req, res) => {
    
   Message.find().then(allMessages =>{
        console.log(allMessages);
            res.send(allMessages)
   }).catch(err => {throw err})

})

module.exports = router;