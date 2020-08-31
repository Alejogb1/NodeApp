module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.session.isAuthenticated) {
            return next();
        } else {
            res.redirect("/");
        }
    },
    ensureGuest: function (req, res, next) {
        if (!req.session.isAuthenticated) {
            return next();
        } else {
            res.redirect("/");
        }
    },
}