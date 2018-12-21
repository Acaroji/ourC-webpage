const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Memory = new Schema({
    remember: String,
    photo:String,
    // followers: [ {type: Schema.Types.ObjectId, ref: "User"}],
    // creator: {type: Schema.Types.ObjectId, ref: "User"}
})
var memory = mongoose.model('memories', Memory)

module.exports =  memory