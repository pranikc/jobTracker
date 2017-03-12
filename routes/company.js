var express = require('express');
var router = express.Router();
var db = require('../models/companyModel');

router.get('/', function(req, res, next) {
  var callback = function(err, company) {
    if(err)
      res.send('error getting companies');
    else
      res.send(company);
  }

  db.all(callback);
});

router.post('/', function(req, res, next) {

  var newCompany = req.body;

  console.log(newCompany);
  var callback = function(err) {
    res.send(err);
  }

  db.add(newCompany, callback);
});

module.exports = router;

// A rounte called /People which will return the list of all people if a get command is given
// A route called /People which will add a person of type {name:"", hobby:""} is a post command is mage