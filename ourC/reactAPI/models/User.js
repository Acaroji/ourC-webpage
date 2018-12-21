const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema({
    username:String,
    password:String,
    email:String,
    country:String 

}) 

var user = mongoose.model('users', User)

module.exports =  user