const express = require('express');
const router = express.Router();
const models=require('../db');

router.post('/addComment',function(req,res){
	var user=req.body.user
	var comment=new models.Comment
		comment.article_id=req.body.article_id
		comment.content=req.body.content
		comment.user_info=user
	comment.save(function(err){
		if(err){
			res.json({"err":err,status:500})
		}else{
			res.json({content:"发表成功",status:200})
		}
	})
})

router.get('/getComments',function(req,res){
	var id=req.query.id
	models.Comment.find({article_id:id},function(err,data){
		if(err){
			res.json({status:500,msg:err})
		}else{
			res.json({status:200,msg:'success',data:data})
		}
	})
})

module.exports=router