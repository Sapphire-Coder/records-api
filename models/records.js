const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    title: { type: String, required: true },
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true }
})

const Records = mongoose.model('Record', recordSchema)

module.exports = Records