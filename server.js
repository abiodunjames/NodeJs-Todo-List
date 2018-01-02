/*jslint node: true */
"use strict";

var express = require('express');

var app = express();

var config = require('./app/config/config');

var mongoose = require('mongoose');

var morgan = require('morgan');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

//Configuration
//Promise = require('bluebird');
//mongoose.Promise = Promise;

mongoose.connect(config.DB);


app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(bodyParser.json());

//app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride());

app.listen(4000); //Listen on port 4000


console.log("App listening on port 4000");

var todoRoutes = require("./app/todoRoutes");



app.use('/todo', todoRoutes);


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', function (req, res,next){
    res.sendfile('./public/index.html');
});