const express = require("express")
const router = express.Router();

//Description: Login/Landing Page
//Router: GET /

router.get("/", (req, res) => { // req means request and res response
        res.render("login" ,{
                layout: "login",
                
        })
})

//Description: Dashboard
//Router: GET /dasboard

router.get("/dashboard", (req, res) => {
        res.render("dashboard")
})

module.exports = router;