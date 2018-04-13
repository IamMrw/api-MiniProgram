var express = require('express');
var router = express.Router();

router.get('/api/info', function (req, res) {
  res.json([
     {
       icon:'',
       title:'你们在学校都干嘛学校快待不下去了啊',
       content:'啊啊啊啊啊啊啊好无聊学校快待不下去了啊',
       time: 1522927521,
       user:{
         name:'ww',
         sex:'0',
         avater:''
       }
     },
     {
       title: '学校快待不下去了啊',
       time: 1522923451,
     },
     {
       title: '大四毕业狗前来报道'
     }, 
     {
       title: '有一起吃鸡的吗',
       content: '新地图来嘛。。。',
       time: 1522911235,
     },
     {
       title: '学校现在怎么样了'
     },
     {
       title: '学校的体育场建好了吗'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     },
     {
       title: '学校快待不下去了啊'
     }
     ]);
});

module.exports=router