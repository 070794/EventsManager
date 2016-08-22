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
connection.connect(function(err) {

	if(!err) {
    console.log("Database is connected ... nn");    
	} else {
    console.log("Error connecting database ... nn"+err.stack);    
	}
});


app.get("/events",function (req,res){
    connection.query('SELECT * from events',function (err,results){
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
      res.send(results);
    });

});

app.get("/type",function (req,res){

      connection.query("SELECT * from events where type = '"+ req.query.type+"'" ,function (err,results){
        res.send(results);
    });

});


app.get("/date",function (req,res){
     
       connection.query("SELECT * from events where dt >= '"+ req.query.date1+"' and dt <= '"+ req.query.date2+"'" ,function (err,results){
        res.send(results);

    });

});


app.get("/userlogin",function (req,res){
       connection.query("SELECT name from user where email= '"+ req.query.username+"' and pass = '"+ req.query.password+"'" ,function (err,results){

       res.send(results);
      // console.log("SELECT name from user where email= '"+ req.query.username+"' and pass = '"+ req.query.password+"'");
       console.log(err);
    });
});


app.post("/createEvent",function (req,res){
     connection.query("Insert into events(`title`,`dt`,`venue`,`type`,`author`,`price`,`des`) "+
      "Values('"+ req.query.event_title+"','"+ req.query.event_date+"','"+ req.query.event_venue+"','"+ req.query.event_type+"','"+ req.query.event_author+"','"+ req.query.event_price+"','"+ req.query.event_description+"')",function(err,results){
     
        res.send(results);
        console.log(err);
    });
});


app.post("/register",function (req,res){
     connection.query("Insert into user(`name`,`email`,`pass`) "+
      "Values('"+ req.query.name+"','"+ req.query.email+"','"+ req.query.password+"')",function(err,results){
     
        res.send(results);
        console.log(err);
    });
});


app.use(express.static('src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/"+"src/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});