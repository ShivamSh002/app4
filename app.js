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

app.get("/sendemail", (req, res) => {
    console.log("senemail rout hit");
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'smokeshahukka@gmail.com', // generated ethereal user
            pass: 'tzwczvqvnuvqrshd' // generated ethereal password
        },
    });
    let info = transporter.sendMail({
        from: 'smokeshahukka@gmail.com', // sender address
        to: "shekhar.kundra@gmail.com", // list of receivers
        subject: "this is subject", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    res.status(200).send("email sent");
});


app.get("/*", (req, res) => {
    res.status(404).render("../views/mainpages/error404.ejs");
});

http.createServer(app).listen(port, () => {

    console.log("SERVR IS RUNNING " + port);
});