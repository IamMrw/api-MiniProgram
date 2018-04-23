const express = require('express');
const router = express.Router();
const models=require('../db');

router.post('/api/addDynamics',function(req,res){
	var user=req.body.user
	var dynamic=new models.Dynamic
		dynamic.article_id="001"
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
router.get('/api/dynamics',function(req,res){
	models.Dynamic.find(function(err,data){
		if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
	})
})


router.post('/api/user/addUser',function(req,res){
	var id=req.body.openId
	models.User.findOne({openId:id},
		function(err,user){
			if(user){
				res.json({msg:"重新登录成功",status:200,user:user})
			}else{
				var user=new models.User
				user.nickName=req.body.nickName
				user.avatar=req.body.avatarUrl
				user.sex=req.body.gender
				user.openId=req.body.openId
				user.save(function(err){
					if(err){
						res.json({err:err,status:500})
					}else{
						res.json({msg:"登录成功",status:200})
					}
				})
			}
		})
	
})
module.exports=router