const express = require("express");
const passport = require("passport");
const router = express.Router();

//Description: Auth with google
//Router: GET /auth/google

router.get("/google",  passport.authenticate('google', { scope: ['profile'] }))

//Description: Dashboard
//Router: GET /dasboard

router.get("/dashboard", (req, res) => {
        res.render("dashboard")
})

module.exports = router;