//##################################################
// INIT EXPRESS
//##################################################

var express = require("express");
var app = express();

//##################################################
// ROUTE
//##################################################

app.get("/", function (req, res) {
    res.send("Hi There!");
});

app.get("/bye", function (req, res) {
    res.send("Goodbye");
});

app.get("/dog", function (req, res) {
    res.send("Meow");
});

// :dogName is a pattern that we wait for
app.get("/dog/:dogName", function (req, res) {
    res.send(req.params.dogName);
});

// Keep this after all the other routes as this will be called for any url
app.get("*", function (req, res) {
    res.send("Page Not Found");
});

//##################################################
// START SERVER
//##################################################

var port = 3000;
app.listen(port, () => console.log("Express server is listening at port " + port));