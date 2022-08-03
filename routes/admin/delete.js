var express = require('express');
var router = express.Router();
var hanghoa = require('../../models/hanghoa.js')

//xóa 
router.route('/')
  .get((req, res, next) => { res.render('delete.ejs'); })
  .post((req, res, next) => {
    hanghoa.deleteOne({ tensp: req.body.tensp },
      error => res.redirect('/'))
  });
router.route('/:id')
  .get((req, res, next) => {
    hanghoa.deleteOne({ _id: req.params.id },
      error => res.redirect('/'))
  });
module.exports = router;