var express = require('express');
var router = express.Router();
const models=require('../db');

router.get('/dynamics',function(req,res){
  models.Dynamic.find({},null,{
    sort:{
      '_id':-1
    }
  },function(err,data){
    if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
  })
})

module.exports=router