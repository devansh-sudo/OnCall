var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    // port:'8004',
    user:'root',
    password:"", //empty for window
    database: 'problem'

});

var server = app.listen(4548, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/users_table', function(req, res){
  con.query('select * from users_table', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);

        }

  });
});
app.get('/problem', function(req, res){
    con.query('select * from `problem`', function(error, rows, fields){
          if(error) console.log(error);
  
          else{
              console.log(rows);
              res.send(rows);
  
          }
  
    });
  });