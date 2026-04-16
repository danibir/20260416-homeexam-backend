const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../handlers/han-db.js')

const foxSchema = new Schema({
    imageLink: {
        type: String,
        unique: true,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
}, { 
    timestamps: true 
})

const Fox = db.mainDb.model('Fox', foxSchema, 'fox')
module.exports = Fox