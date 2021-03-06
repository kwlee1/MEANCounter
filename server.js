var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojorocks'}));  
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if(!req.session.count){
        req.session.count = 0;
    }
    req.session.count++; 
    res.render("index", { counter: req.session.count });
})

app.listen(5000,function(){
    console.log("listening on port 5000");
})
