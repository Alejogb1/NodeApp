const dotenv = require("dotenv")
var path = require("path");

const express = require("express")
const exphbs = require("express-handlebars")
const connectDB = require("./config/db")
const connectMongoDB = require("./config/db")
const morgan = require("morgan")
const app = express()
const passport = require("passport")
const session = ("express-session")

// Load config
dotenv.config({path: "./config/config.env"})

// Passport config

require("./config/passport")(passport) // Second parentesis is an argument

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

connectMongoDB()

// Logging
if (process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
} 
// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: ".hbs"})); 
app.set('views', path.join(__dirname, "views"));
app.set("view engine", ".hbs");

// Sessions 
app.use(session ({
    secret: "keyboard cat",
    resave: false, // We don't want to save  a session if nothinh is modified
    saveUninitialized: true, // Don't create a session until smt is stored
   /* cookie: { secure: true }*/ // This won't work without https
}))
// Static folder
app.use(express.static(path.join(__dirname, "public")))
// Routes

app.use("/", require("./routes/index"))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}.`))