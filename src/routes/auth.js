const router = require("express").Router();
const passport = require("passport");

router.get("/discord", passport.authenticate(`discord`));

router.get(
    "/discord/redirect",
    passport.authenticate("discord"),
    (req, res) => {
        res.redirect("http://176.9.111.217:3092//dashboard");
    }
);

router.get("/", (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send(" msg: Unathorized");
    }
});
router.get("/logout", function(req, res) {
    req.logOut();
    res.status(200).clearCookie("connect.sid");
    req.session.destroy(function(err) {
        res.send(200);
    });
});

module.exports = router;