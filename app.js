var express = require("express");
var http = require("http");
var app = express();
var ejs = require("ejs");
var favicon = require('serve-favicon');

var port = process.env.port || 1234;

app.set("view engine", "ejs");

app.use(favicon("./public/images/blog-white-smoke-vapor-black-background.jpg"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/images"));
app.use("/js", express.static(__dirname + "/public/js"));

app.get(["/index", "/", "/home"], (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs");
});


app.get(["/About", "/me", "/AboutUs"], (req, res) => {
    res.status(200).render("../views/mainpages/aboutus.ejs");
});

app.get("/contact", (req, res) => {
    res.status(200).render("../views/mainpages/contact.ejs");
});

app.get("/*", (req, res) => {
    res.status(404).render("../views/mainpages/error404.ejs");
});

http.createServer(app).listen(port, () => {

    console.log("SERVER IS RUNNING " + port);
});