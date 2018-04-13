var express = require('express');
var app = express();
var api=require('./routes/index')

app.set('port', (process.env.PORT || 9999));

app.use(api)

app.listen(app.get('port'), function () { 
  console.log('app listening at http://localhost:'+app.get('port'));
});
