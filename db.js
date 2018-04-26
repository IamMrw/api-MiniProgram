var mongoose = require('mongoose')

var Schema=mongoose.Schema

var Dynamic=new Schema({
	article_id:String,
	title:String,
	content:String,
	p_time:String,
	user:{
		nickName:String,
		realName:String,
		avatarUrl:String,
		sex:String,
		openId:String
	}
})

var User=new Schema({
	nickName:String,
	realName:String,
	openId:String,
	intro:String,
	sex:String,
	avatar:String,
	major:String,
	enrollmentYear:String
})

mongoose.connect('mongodb://localhost/alumni')

exports.Dynamic=mongoose.model('Dynamic',Dynamic)
exports.User=mongoose.model('User',User)