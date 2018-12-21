const express = require('express')
const router = express.Router()

var user = require('../models/User')


router.post('/', (req, res) => {
  debugger
  user.findOne({username: req.body.username})
  .then((result) => {
    console.log(result,"prueba")

      if(result.password === req.body.password){
        res.cookie('loggedIn', 'true')
        res.status(200).send("Log in correct")
      }
      else{
        res.status(403).send('Invalido subnormal')
      }
  }).catch(err => console.log(err))
})

module.exports = router;