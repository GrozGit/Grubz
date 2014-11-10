//var http = require('http');
var express = require("express");
var app = express();

app.set("view engine", "jade");

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render("index", { title: "Restaurant" });
});

var controllers = require("./Controllers");
controllers.init(app);

//var schema = require("./data_models/Schema.js");
//schema.init();

//var server = http.createServer(app);

app.listen(3080);