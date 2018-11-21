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

app.listen(process.env.PORT, process.env.IP);