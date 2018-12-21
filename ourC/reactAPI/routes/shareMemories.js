const express = require('express')
const router = express.Router()

var Memory = require('../models/Memories');

router.post('/',(req,res)=>{
   console.log(req.body);
   debugger
   let newMemory= new Memory({
       remember:req.body.remember,
       photo:req.body.photo
   })
   newMemory.save(req.body).then(saved=>{
       console.log("hello",saved)
       res.send({memory:save})
   }).catch(err =>{
       res.send(err)
   })
})

router.get('/', (req,res)=>{
    Memorie.find().then(allMemories =>{
        console.log(allMemories);
            res.send(allMemories)
        }).catch(err => {throw err})
})
module.exports = router;