var debug = require('debug')('express-app:users.js');
var express = require('express');
var router = express.Router();
var mongodb = require('../service/mongodb.js');

var User = mongodb.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var query = User.find()
  query.exec(function (err, docs) {
    res.set('Content-Type', 'text/plain');
    res.send(docs);
    //res.status(404).send('Sorry, we cannot find that!');
  });
});

router.get('/user/*', function(req, res, next) {
  var query = User.find()
  query.exec(function (err, docs) {
    res.send(docs.toString());
  });
});

router.get('/save', function(req, res, next) {
  var user = new User({
    name:req.query['name'],
    email:req.query['email'],
    password:req.query['password']
  });

  user.save(function (err, u) {
    if (err){
      res.send('注册失败，error:' + err)
    } else {
      res.send('注册成功，用户名：'+u.name);
    }
  });
});

module.exports = router;
