var express = require('express');
var router = express.Router();
var hanghoa = require('../models/hanghoa.js')

router.get('*', function (req, res, next) {
  res.locals.userId = req.session.userId;
  next()
});

router.get('/', (req, res, next) => {
  res.redirect('/1');
});
router.get('/:page', (req, res, next) => {
  let perPage = 5
  let page = req.params.page || 1
  hanghoa
    .find()
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, dshh) => {
      hanghoa.countDocuments((err, count) => {
        if (err) return next(err)
        res.render('find.ejs', {
          dshh,
          current: page,
          pages: Math.ceil(count / perPage),
          timkiem: false
        });
      })
    })
})

module.exports = router;
