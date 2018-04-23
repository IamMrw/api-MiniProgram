var express = require('express');
var app = express();
var api=require('./routes/publish')

app.set('port', (process.env.PORT || 9999));

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(api)

app.listen(app.get('port'), function () { 
  console.log('app listening at http://localhost:'+app.get('port'));
});
