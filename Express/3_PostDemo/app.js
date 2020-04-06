//##################################################
// INCLUDE REQUIRED PACKAGES
//##################################################

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//##################################################
// ADD ADDITIONAL DIRECTORIES
//##################################################

app.use(express.static("assets"));
app.use(express.static("views"));

//##################################################
// ADDING ROUTES
//##################################################

var friends = ["Tony", "Chris", "Banner", "Thor"];

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/friends", function (req, res) {
    res.render("friends.ejs", { friendsList: friends });
});

app.post("/addfriend", function (req, res) {
    // body-parser package installation requried for finding Form Data
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

//##################################################
// START SERVER
//##################################################

var port = 3000;
var ip = "127.0.0.1";

app.listen(port, ip, () => console.log("Server listening at " + ip + ":" + port));