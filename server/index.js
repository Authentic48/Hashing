const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const morgan = require('morgan')
const {errorHandler, notFound } = require('./middleware/errorHandler')
const userRouter = require('./routes/authRoute')

dotenv.config()

connectDB()
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/users', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}` .blue.underline ))
