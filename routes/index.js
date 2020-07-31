const express = require("express")
const router = express.Router();
const {ensureAuth, ensureGuest} = require("../middleware/auth")
//Description: Login/Landing Page
//Router: GET /

router.get("/", ensureGuest, (req, res) => { // req means request and res response
        res.render("login" ,{
                layout: "login",       
        })
})

// @desc: Dashboard
// @route GET /dasboard

router.get("/dashboard", ensureAuth, (req, res) => {
        res.render("dashboard")
})

// @desc Logout user 
// @route /auth/logout

router.get("/logout", (req, res) => {
        req.logout()
        res.redirect("/")
})

module.exports = router;