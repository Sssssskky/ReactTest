const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const path = require('path');

app.get('/',function(req,res){
  res.render('index');
})

app.set('views','./client/dist/');
app.engine('.html', ejs.__express);
app.set('view engine','html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'..','client/dist')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'..','client/dist/index.html'))
});


const server = app.listen(3000,function(){
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s',host,port);
})
