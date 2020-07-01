const dotenv = require("dotenv")
const express = require("express")
const connectDB = require("./config/db")

// Load config
dotenv.config({path: "./config/config.env"})

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}.`))