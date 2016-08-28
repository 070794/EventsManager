module.exports = 
{
    'googleAuth' :{
		'clientID'      : '1098422912996-72rbb52eb3m0in7e4ovlued0kkqocf2r.apps.googleusercontent.com',
		'clientSecret' : 'XRAyLr1G1_XRoAxXLfIyj3_-',
		'callbackURL'   :  'http://localhost:3000/auth/google/callback',
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"XRAyLr1G1_XRoAxXLfIyj3_-",
        "redirect_uris":  ["http://localhost:3000/auth/google/callback",
                        "http://ec2-52-11-212-149.us-west-2.compute.amazonaws.com:3000/auth/google/callback"],
        "javascript_origins":["http://localhost:3000",
                              "http://52.11.212.149:3000",
                              "http://ec2-52-11-212-149.us-west-2.compute.amazonaws.com:3000"]
	}
};    

