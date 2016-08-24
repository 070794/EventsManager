var express = require('express'); 
var session =require('express-session'); 
var app = express(); 
var mysql=require('mysql'); 
var passport= require('passport');
var bodyParser=require('body-parser');
var multer = require('multer');
var store= "";

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('src'));
app.set('views',__dirname + '/src');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(session({
  secret: 'vidyapathaisalwaysrunning',
  id:19,
  resave: true,
  saveUninitialized: true
 } ));
app.use(passport.initialize());
app.use(passport.session());


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



require('./src/config/passport')(passport,connection);
require('./src/app/routes.js')(app, passport);


app.get("/events",function (req,res){
    connection.query('SELECT * from events',function (err,results){
    res.send(results);
    });

});

app.get("/images",function (req,res){
      connection.query("SELECT image_path from images where event_id= '"+
        req.query.image+"'",function (err,results){
      
          res.send(results);
    });

});



app.get("/event_data",function (req,res){

      connection.query("SELECT * from events where event_id= '"+req.query.event+
        "'",function (err,results){
        res.send(results);
    });

});

app.get("/type",function (req,res){

      connection.query("SELECT * from events where type = '"+ 
        req.query.type+"'" ,function (err,results){
          res.send(results);
    });

});


app.get("/date",function (req,res){
     
       connection.query("SELECT * from events where dt >= '"+ req.query.date1+
        "' and dt <= '"+ req.query.date2+"'" ,function (err,results){
         res.send(results);

    });

});



app.post("/createEvent",function (req,res){
     connection.query("Insert into events(`title`,`dt`,`venue`,`type`,`author`,`price`,`des`) "+
      "Values('"+ req.query.event_title+"','"+ req.query.event_date+"','"+req.query.event_venue+"','"+req.query.event_type+"','"+ req.query.event_author+"','"+req.query.event_price+"','"+ req.query.event_description+"')",function(err,results){
     
        res.send(results);
        console.log(err);
    });
});


var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './src/images/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            store=file.fieldname + '-' + datetimestamp + '.' + 
            file.originalname.split('.')[file.originalname.split('.').length -1];
      
            cb(null, store);
             }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
             console.log(req.body.event_id);
             console.log(store);

    connection.query("Insert into images(`event_id`,`image_path`)Values('"+ 
      req.body.event_id+"','"+store+"')",function(err,results){
     
    //     res.send(results);
        console.log(err);
    });


    connection.query("Update events SET `thumb` ='"+store+"' where `event_id` ='"+ 
      req.body.event_id+"'",function(err,results){
     
    //     res.send(results);
        console.log(err);
    });
        });
    });



app.get('/', function (req, res) {
  console.log(req);
  res.render("index.ejs");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});