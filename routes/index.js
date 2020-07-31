const express = require("express")
const router = express.Router();

//Description: Login/Landing Page
//Router: GET /

router.get("/", (req, res) => { // req means request and res response
        res.render("login" ,{
                layout: "login",       
        })
})

// @desc: Dashboard
// @route GET /dasboard

router.get("/dashboard", (req, res) => {
        res.render("dashboard")
})

// @desc Logout user 
// @route /auth/logout

router.get("/logout", (req, res) => {
        req.logout()
        res.redirect("/")
})

module.exports = router;