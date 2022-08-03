var express = require('express');
var router = express.Router();
var user = require('../../models/user.js')
var bcrypt = require('bcrypt');

router.route("/")
    .get(function (req, res, next) { res.render('dangnhap.ejs'); })
    .post(function (req, res, next) {
        user.findOne({ username: req.body.username }, (err, nguoidung) => {
            if (nguoidung) {
                bcrypt.compare(req.body.password, nguoidung.password, (err, same) => {
                    if (same) {
                        req.session.userId = nguoidung._id
                        res.redirect('/')
                    }
                    else
                        res.redirect('/dangnhap')
                })
            }
            else
                res.redirect('/dangnhap')
        })
    });
module.exports = router;