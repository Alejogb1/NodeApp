const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const User = require("../models/User")

module.exports = function (passport){
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },
      async (accessToken, refreshToken, profile, done) => {
          const newUser = { // By creating a "newUser", MD creates an unique ID for it.
              googleId: profile.id, // ID from Google != ID from MD
              displayName: profile.displayName,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              image: profile.photos[0].value
          }
          console.log(newUser)
          try {
            let user = await User.findOne({ googleId: profile.id})
            if (user){
              done(null, user)
            } else {
              user = await User.create(newUser)
              done(null, user)
            }
          } catch (err) {
            console.error(err)
          }
      }
    ))
    passport.serializeUser((user, done) => { // Grab User Infor and "done"
        done(null, user.id); // user.id is MD ID, NOT google's id
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
      });
}