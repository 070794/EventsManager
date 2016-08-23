module.exports = function(app, passport) {

    // route for home page
    // app.get('/', function(req, res) {
    //     res.render('index89.html'); // load the index.ejs file
    // });

    // route for showing the profile page
    app.get('/loggedIn', isLoggedIn, function(req, res) {
        console.log(req);
        console.log(req.user);
        res.render('index.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });



    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails

    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/loggedIn',
                    failureRedirect : 'https://www.google.com',
                    session:true
            }));

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

