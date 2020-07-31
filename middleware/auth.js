module.exports = {
    ensureAuth: function(req, res, next){
        if (req.isAuthenticated()){
            console.log("next ensureAuth")
            return next()
        } else {
            res.redirect("/")
            console.log("else of ensureAuth")
        }
    },
    ensureGuest: function(req, res, next){
        if (req.isAuthenticated()){
            console.log("dashboard")
            res.redirect("/dashboard")
        } else {
            console.log("else of ensureGuests")
            return next()
        }
    },
}