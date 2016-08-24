var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
//var User  = require('../app/models/user');

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
               return done(null, newUserMysql.id); //req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                newUserMysql = new Object();
                
                newUserMysql.email    = profile.emails[0].value;
                //newUserMysql.password = password; // use the generateHash function in our user model
            
                var insertQuery = "INSERT INTO user ( `name`,`email` ) values ('" + profile.displayName +"','" + profile.emails[0].value +"')";
                console.log(insertQuery);
                connection.query(insertQuery,function(err,rows){
                newUserMysql.id = rows.insertId;
                
                console.log(newUserMysql.id);
                return done(null, newUserMysql.id);

                }); 
            }   
        });

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        // process.nextTick(function() {

        //     // try to find the user based on their google id
        //     User.findOne({ 'google.id' : profile.id }, function(err, user) {
        //         if (err)
        //             return done(err);

        //         if (user) {

        //             // if a user is found, log them in
        //             return done(null, user);
        //         } else {
        //             // if the user isnt in our database, create a new user
        //             var newUser          = new User();

        //             // set all of the relevant information
        //             newUser.google.id    = profile.id;
        //             newUser.google.token = token;
        //             newUser.google.name  = profile.displayName;
        //             newUser.google.email = profile.emails[0].value; // pull the first email

        //             // save the user
        //             newUser.save(function(err) {
        //                 if (err)
        //                     throw err;
        //                 return done(null, newUser);
        //             });
        //         }
        //     });
        // });
  //   return done(null);
    }));

};
