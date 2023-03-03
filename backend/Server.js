const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('bodyParser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

// defining port
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGO_URL

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const connection = mongoose.connection;
connection.once("open",()=> {
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})