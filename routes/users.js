var express = require('express');
var router = express.Router();
var query = require('../mysql/index');
var date = require('../data/data.json');
/* GET users listing. */
router.get('/get/train', function(req, res, next) {
  
  query('select * from data',function(err,results){
    if(err){
      res.json({code:0,err:err})
    }else{
      res.json({code:1,data:date})
    }
  })


});

module.exports = router;
