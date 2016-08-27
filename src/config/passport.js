var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport,connection) {

    passport.serializeUser(function(user, done) {
        console.log(user);
        console.log("Plz");
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

    passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,
        returnURL: configAuth.googleAuth.callbackURL,
        accessType : 'offline'

    },
    function(token, refreshToken, profile, done) {
           console.log(profile.displayName);
           console.log(profile.emails[0].value);
          // console.log(done);
           
         connection.query("select * from user where `email` = '"+profile.emails[0].value+"'",function(err,rows){
            console.log(rows);
            console.log("above row object");
            if (err)
                return done(err);
            if (rows.length) {
                 console.log(rows[0]);
                var newUserMysql = new Object();
                newUserMysql.id =rows[0].user_id;
                newUserMysql.name =rows[0].name;
                newUserMysql.email =rows[0].email;
                console.log(newUserMysql);
               return done(null, newUserMysql); 
              
            } else {

                // if there is no user with that email
                // create the user
                newUserMysql = new Object();
                
                newUserMysql.email    = profile.emails[0].value;
            
                var insertQuery = "INSERT INTO user ( `name`,`email` ) values ('" + profile.displayName +"','" + profile.emails[0].value +"')";
                console.log(insertQuery);
                connection.query(insertQuery,function(err,rows){
                newUserMysql.id = rows.insertId;
                
                newUserMysql.name =profile.displayName;
                newUserMysql.email =profile.emails[0].value;
                console.log(newUserMysql);
                return done(null, newUserMysql);

                }); 
            }   
        });

        
    }));

};
