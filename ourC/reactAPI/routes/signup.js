const express = require('express')
const router = express.Router()
const mongoose= require('mongoose')

var User = require('../models/User');
// const User = mongoose.model('User'

router.post("/",(req,res,next)=>{
    debugger
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const country = req.body.country;
    
    let error  = []; 

    if(!req.body.username) {
        error.push({text: "please add a username"})
    }
    if(!req.body.password){
        error.push({text:"please add a password"})
    }

    if(error.length > 0) {
        console.log('errorf', error )
        res.send(error)
    } else {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email:req.body.email,
            country:req.body.country
        }
        new User(newUser)
        .save()
        .then(result => {
            console.log('text', result)
            debugger
            res.status(200).send("Signed up")
        })
        .catch(error =>{
            console.log(error)
            next(error);
        });
    }    

})
module.exports = router;



