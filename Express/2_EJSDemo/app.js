//##################################################
// INIT EXPRESS
//##################################################

var express = require("express");
var app = express();

//##################################################
// ADDING ADITIONAL DIRECTORIES FOR CSS AND SCRIPTS
//##################################################

app.use(express.static("public"));

//##################################################
// ROUTES
//##################################################

app.get("/", function (req, res) {
    // res.send("home page");
    res.render("home.ejs");
});

app.get("/fallinglovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    // sending variable to ejs
    res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "post-1", author: "Susy" },
        { title: "post-2", author: "Nitin" },
        { title: "post-3", author: "Lol" }
    ];

    res.render("posts.ejs", { posts: posts });
});

//##################################################
// START SERVER
//##################################################

var port = 3000;
var ip = "127.0.0.1"
app.listen(port, ip, () => console.log("Express app is listening on " + ip + ":" + port));