const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Message = new Schema({
    from: String,
    message:String,
    time:{ type: Date, default: Date.now }
})
var message = mongoose.model('messages', Message)

module.exports =  message