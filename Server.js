var express = require('express');
var app = express();
var mysql= require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'eventuser',
  password : 'password',
  database : 'EventDB',
  debug    :  false

});
 var data;
connection.connect(function(err) {

	if(!err) {
    	console.log("Database is connected ... nn");    
	} else {
    	console.log("Error connecting database ... nn"+err.stack);    
	}
	
  // connected! (unless `err` is set)
});

  // this.get = function(res) {
  //   connection.acquire(function(err, con) {
  //     con.query('select * from events', function(err, result) {
  //       con.release();
  //       res.send(result);
  //     });
  //   });
  // };


app.get("/events",function (req,res){

      connection.query('SELECT * from events',function (err,results){

        //res.render(__dirname+"/"+"src/index.html",{users: results });
        res.send(results);
    });

});

app.get("/images",function (req,res){

      connection.query("SELECT image_path from images where event_id= '"+req.query.image+"'",function (err,results){
      console.log("SELECT image_path from images where event_id= '"+req.query.image+"'")
        //res.render(__dirname+"/"+"src/index.html",{users: results });
        res.send(results);
    });

});


app.get("/event_data",function (req,res){

      connection.query("SELECT * from events where event_id= '"+req.query.event+"'",function (err,results){
      console.log("SELECT * from events where event_id= '"+req.query.event+"'")
        //res.render(__dirname+"/"+"src/index.html",{users: results });
        res.send(results);
    });

});

app.get("/type",function (req,res){

       //console.log("SELECT * from events where type = "+ req.query.type);
     
      connection.query("SELECT * from events where type = '"+ req.query.type+"'" ,function (err,results){

        res.send(results);
    });

});

app.get("/date",function (req,res){
     
       connection.query("SELECT * from events where dt >= '"+ req.query.date1+"' and dt <= '"+ req.query.date2+"'" ,function (err,results){
        //console.log("SELECT * from events where dt >= '"+ req.query.date1+"' and dt <= '"+ req.query.date2+"'");
        res.send(results);

    });

});

app.get("/userlogin",function (req,res){
     
       connection.query("SELECT name from user where email= '"+ req.query.email+"' and pass = '"+ req.query.pass+"'" ,function (err,results){
        //console.log("SELECT * from events where dt >= '"+ req.query.date1+"' and dt <= '"+ req.query.date2+"'");
        res.send(results);

    });
});



app.use(express.static('src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/"+"src/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});