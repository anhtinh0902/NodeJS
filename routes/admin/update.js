var express = require('express');
var router = express.Router();
var hanghoa = require('../../models/hanghoa.js')

//get post sửa
router.route('/')
  .get((req, res, next) => {
    hh = {}
    res.render('update.ejs', { hh });
  })
  .post((req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Chua chon file anh");
    }
    hanghoa.findOne(
      { _id: req.body.maso },
      (error, hh) => {
        var hinh = req.files.hinhanh;
        var duongdan = 'public/images/' + hinh.name;
        hinh.mv(duongdan, function (err) {
          if (err) return res.status(500).send(err);
          hh.tensp = req.body.tensp
          hh.gia = req.body.gia
          hh.hinhanh = hinh.name
          return hh.save(error => res.redirect('/'))
        })
      })
  });
//get sửa có id
router.route("/:id")
  .get((req, res, next) => {
    // console.log(req.params.id)
    hanghoa.findOne({ _id: req.params.id },
      (error, hh) => {
        res.render('update.ejs', { hh });
      })
  });
module.exports = router;