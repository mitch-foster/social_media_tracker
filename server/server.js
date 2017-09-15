const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const Twitter = require('twitter');
const TwitterStrategy = require('passport-twitter').Strategy;

const config = require('./config');

const app = module.exports = express();
const port = config.port || 3333;

app.use(bodyParser.json());
app.use(cors())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret,
}));
app.use(passport.initialize());
app.use(passport.session());
let user;
passport.use(new TwitterStrategy({
  consumerKey: config.twitter_consumer_key,
  consumerSecret: config.twitter_consumer_secret,
  callbackURL: 'http://localhost:3333/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    user = profile.username;
    return done(null, profile)
  }
))
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const client = new Twitter({
  consumer_key: config.twitter_consumer_key,
  consumer_secret: config.twitter_consumer_secret,
  access_token_key: config.twitter_access_token_key,
  access_token_secret: config.twitter_access_token_secret
});

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', 
{ successRedirect: 'http://localhost:3000/chart', failureRedirect: 'http://localhost:3000/' }));

app.get('/api/user', (req, res)=>{
  if(user){
    res.status(200).send(user)
  } else res.status(404)
})

app.get('/api/twitterData/:screen_name', (req, res)=>{
  const params = {screen_name: req.params.screen_name}
  client.get('users/lookup', params, function(error, data, response) {
    if (!error) {
    }
    res.status(200).send(data[0])
  });
})

app.listen(port, console.log(`Server listening on port ${port}`))