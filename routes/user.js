const express = require('express');
const router = express.Router();
const models=require('../db');
router.post('/addUser',function(req,res){
	var id=req.body.openId
	models.User.findOne({openId:id},
		function(error,user){
			if(error){
				res.json({msg:err,status:500})
				return;
			}
			if(user){
				res.json({msg:"重新登录成功",status:300,user:user})
			}else{
				var user=new models.User
				user.nickName=req.body.nickName
				user.avatarUrl=req.body.avatarUrl
				user.sex=req.body.gender
				user.openId=req.body.openId
				user.save(function(err){
					if(err){
						res.json({msg:err,status:500})
					}else{
						res.json({msg:"登录成功",status:200})
					}
				})
			}
		})
	
})

router.get('/getUser',function(req,res){
	var openId=req.query.openId
	models.User.findOne({openId:openId},function(err,user){
		if(err){
			res.json({status:500,msg:err})
		}else{
			if(user){
				res.json({status:200,user:user,msg:'success'})
			}else{
				res.json({status:404,msg:'not found'})
			}
		}
		
	})
})
router.get('/getDynamic',function(req,res){
	var openId=req.query.openId
	models.Dynamic.find({'user.openId':openId},null,{
		sort:{
			'_id':-1
		}
	},function(err,data){
		if(err){
			res.json({status:500,msg:err})
		}else{
			if(data){
				res.json({status:200,data:data,msg:'success'})
			}else{
				res.json({status:404,msg:'not found'})
			}
		}
	})
})
router.delete('/deleteDynamic',function(req,res){
	var id=req.body.id
	models.Dynamic.findOneAndRemove({_id:id},function(err,data){
		if(err){
			res.json({status:500,msg:err})
		}else{
			res.json({status:200,msg:'success',data:data})
		}
	})
})

router.post('/setting',function(req,res){
	var openId=req.body.openId
	models.User.update({openId:openId},{
		$set:{
			realName:req.body.realName,
			sex:req.body.sex,
			intro:req.body.intro,
			major:req.body.major,
			enrollmentYear:req.body.enrollmentYear
	}
},function(err,data){
		if(err){
			res.json({status:500,msg:err})
		}else{
			res.json({status:200,msg:'success'})
		}
	})
})

module.exports=router