var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
    //res.send("<h1>Welcome to the HOME PAGE!</h1><h2>Blah Blah...</h2>");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.listen(3000, function(){
    console.log("Your app is running in localhost:3000");
});