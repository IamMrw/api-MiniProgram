const express = require('express');
const router = express.Router();
const models=require('../db');

router.post('/addJob',function(req,res){
	var user=req.body.user
	var job=new models.Job
		job.title=req.body.title
		job.content=req.body.content
		job.type=req.body.type
		job.p_time=Math.ceil(Date.now()/1000)
		job.user=user
	job.save(function(err){
		if(err){
			res.json({"err":err,status:500})
		}else{
			res.json({content:"发表成功",status:200})
		}
	})
})

router.get('/getJob',function(req,res){
	var id=req.query.id
	models.Job.findOne({_id:id},function(err,data){
		if(err){
			res.json({status:500,msg:err})
		}else{
			res.json({status:200,msg:'success',data:data})
		}
	})
})


module.exports=router