var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3005;
var db = require('./db/dbConnection');
var User = require('./models/userModel');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like https://sebastianudden.github.io/project-name or http://localhost:3000
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

User.find(function (err, users) {
    if (err) return console.error(err);
    console.log('+++++++++++++++++++++++++ users ++++++++++++++++++++');
    users.forEach(user => {
        console.log('+++ ' + user.name + ' +++');
        console.log(user);        
    });
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')
});
var userRouter = require('./routes/userRoutes')(User);

app.use('/api/users', userRouter);

app.get('/', function(req, res) {
    res.send('Welcome to workout-app-backend, a RESTful API service for the workout app');
});

app.listen(port, function() {
    console.log('Running on port: ', port);
});
