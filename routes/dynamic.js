const express = require('express');
const router = express.Router();
const models=require('../db');

router.post('/addDynamic',function(req,res){
	var user=req.body.user
	var dynamic=new models.Dynamic
		dynamic.title=req.body.title
		dynamic.content=req.body.content
		dynamic.p_time=Math.ceil(Date.now()/1000)
		dynamic.user=user
	dynamic.save(function(err){
		if(err){
			res.json({"err":err,status:500})
		}else{
			res.json({content:"发表成功",status:200})
		}
	})
})

router.get('/getDynamic',function(req,res){
	var id=req.query.id
	models.Dynamic.findOne({_id:id},function(err,data){
		if(err){
			res.json({status:500,msg:err})
		}else if(data){
			res.json({status:200,msg:'success',data:data})
		}else{
			models.Job.findOne({_id:id},function(error,job){
				if(error){
					res.json({status:500,msg:error})
				}else{
					res.json({status:200,msg:'success',data:job})
				}
				
			})
		}
	})
})


module.exports=router