var express = require('express');
var app = express();
var index=require('./routes/index')
var dynamic=require('./routes/dynamic')
var job=require('./routes/job')
var user=require('./routes/user')
var comment=require('./routes/comment')


app.set('port', (process.env.PORT || 9999));

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api',index)
app.use('/api/p',dynamic)
app.use('/api/j',job)
app.use('/api/user',user)
app.use('/api/comment',comment)

app.listen(app.get('port'), function () { 
  console.log('app listening at http://localhost:'+app.get('port'));
});
