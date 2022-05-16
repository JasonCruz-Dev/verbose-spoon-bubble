require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require('mongoose')

const port = 4000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } )
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const emailSubs = require('./routers/emailSubs')
app.use('/emailSubs', emailSubs)

app.listen(port, () =>  console.log(`Server started on Port: ${port}`))