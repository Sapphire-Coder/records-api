require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const db = mongoose.connection
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const recordsController = require('./controllers/records')
app.use('/records', recordsController)

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log('MongoDB connected')
})

db.on('error', err => console.log(`${err.message} mongo not connected`))
db.on('disconnected', () => console.log('mongo disconnected'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))