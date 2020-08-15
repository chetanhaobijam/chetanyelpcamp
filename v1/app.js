const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let campgrounds = [
	{name: campone, image: imageurl},
	{name: camptwo, image: imageurl},
	{name: campthree, image: imageurl},
	{name: campfour, image: imageurl}
	];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get("/", function(req, res){
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res){
	let name = req.body.name;
	let image = req.body.image;
	let newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("campgrounds");
})

app.get("/campgrounds/new", function(req, res){
	res.render("new");
})

app.get("*", function(req, res){
	res.send("Error 404! Page not found!");
})

// Server
app.listen(3000, function(){
	console.log("The Yelp Camp has started!");
})