const dotenv = require("dotenv")
var path = require("path");
const express = require("express")
const exphbs = require("express-handlebars")
const connectMongoDB = require("./config/db")
const morgan = require("morgan")
const passport = require("passport")
const session = require("express-session")


// Load config
dotenv.config({path: "./config/config.env"})

// Passport config

require("./config/passport")(passport) // Second parentesis is an argument


connectMongoDB()

const app = express()


// Sessions 
app.use(session({
    secret: "keyboard cat",
    resave: false, // We don't want to save  a session if nothinh is modified
    saveUninitialized: false, // Don't create a session until smt is stored
   /* cookie: { secure: true }*/ // This won't work without https
   })
    
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();    
})



// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: ".hbs"})); 
app.set('views', path.join(__dirname, "views"));
app.set("view engine", ".hbs");

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/index"))
app.use("/", require("./routes/auth"))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}.`))