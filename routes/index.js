const express = require("express")
const router = express.Router();

//Description: Login/Landing Page
//Router: GET /

router.get("/", (req, res) => {
        res.send("Login")
})

//Description: Dashboard
//Router: GET /dasboard

router.get("/", (req, res) => {
        res.send("Dashboard")
})

module.exports = router;