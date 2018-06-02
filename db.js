var mongoose = require('mongoose')

var Schema=mongoose.Schema

var Dynamic=new Schema({
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
var Job=new Schema({
	title:String,
	content:String,
	p_time:String,
	type:String,
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
	avatarUrl:String,
	major:String,
	enrollmentYear:String
})
var Comment=new Schema({
	content:String,
	c_time:{type:String,default:Math.ceil(Date.now()/1000)},
	article_id:String,
	user:{
		nickName:String,
		realName:String,
		avatarUrl:String,
		sex:String,
		openId:String
	}

})

mongoose.connect('mongodb://localhost/alumni')

exports.Dynamic=mongoose.model('Dynamic',Dynamic)
exports.Job=mongoose.model('Job',Job)
exports.User=mongoose.model('User',User)
exports.Comment=mongoose.model('Comment',Comment)