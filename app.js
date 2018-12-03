var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",function(req, res){
    res.render("index");
});

app.get("/tailoredsuits",function(req, res){
    res.render("former");
});

app.get("/students", function(req, res){
   res.render("student"); 
});

app.get("/policeandmilitary", function(req, res){
   res.render("policeMilitary"); 
});

app.get("/uniforms", function(req, res){
    res.render("uniform");
})

app.get("/process", function(req, res){
    res.render("flowchart");
})

app.get("/info", function(req, res){
    res.render("map");
})

app.listen(process.env.PORT, process.env.IP);