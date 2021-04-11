const express = require("express");
const passport = require("passport");
const router = express.Router();

//Description: Auth with google
//Router: GET /auth/google

router.get("/auth/google/", passport.authenticate('google', { scope: ['profile'] }))

//Description: google auth callback
//Router: GET /auth/google/callback
router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
    }
  )

module.exports = router;