var express = require('express');
var router = express.Router();
var hanghoa = require('../../models/hanghoa.js')

//tìm sản phẩm
router.route("/")
    .get( (req, res, next) => { res.render('search.ejs'); })
    .post( (req, res, next) => {
        res.locals.userId=req.session.userId
        hanghoa.find({
            tensp: { $regex: req.body.tensp ,$options: 'i' }
        }, (error, dshh) => {
            res.render('find.ejs', {
                dshh,
                timkiem: true
            });
        })
    });

module.exports = router;