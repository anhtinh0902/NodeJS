var express = require('express');
var router = express.Router();
var hanghoa = require('../../models/hanghoa.js')

// thêm
router.route("/")
    .get((req, res, next) => {
        res.render('insert.ejs');
    })
    .post((req, res, next) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            var hh = new hanghoa({
                tensp: req.body.tensp,
                gia: req.body.gia,
            })
            // return res.status(400).send("No files were uploaded");
            return hh.save(error => res.redirect('/them'))
        }
        var hinh = req.files.hinhanh;
        var duongdan = 'public/images/' + hinh.name;
        hinh.mv(duongdan, function (err) {
            if (err) return res.status(500).send(err);
            var hh = new hanghoa({
                tensp: req.body.tensp,
                gia: req.body.gia,
                hinhanh: hinh.name
            })
            hh.save(error => res.redirect('/them'))
        });
    });
module.exports = router;