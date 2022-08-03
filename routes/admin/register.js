var express = require('express');
var router = express.Router();
var user = require('../../models/user.js')

router.route("/")
    .get((req, res, next) => { res.render('dangky.ejs'); })
    .post((req, res, next) => {
        var nguoidung = new user({
            username: req.body.username,
            password: req.body.password
        })
        nguoidung.save(err => res.redirect('/'))
    });
module.exports = router;