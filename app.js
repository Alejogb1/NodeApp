const dotenv = require("dotenv")
var path = require("path");

const express = require("express")
const exphbs = require("express-handlebars")
const connectDB = require("./config/db")
const connectMongoDB = require("./config/db")
const morgan = require("morgan")
const app = express()

// Load config
dotenv.config({path: "./config/config.env"})

connectMongoDB()

// Logging
if (process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
} 
// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: ".hbs"})); 
app.set('views', path.join(__dirname, "views"));
app.set("view engine", ".hbs");

  
// Routes

app.use("/", require("./routes/index"))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}.`))