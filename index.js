//import required modules
const express = require("express");
const path = require("path");// path is built in node module

const app = express();//create an express app and store in  app variable 
const port = process.env.PORT || 8888;

//set up paths o important files and folders
//set template engine
app.set("views", path.join(__dirname, "views")); //set express views to use <app_directory>/views
app.set("view engine", "pug");
//set path for static files (eg CSS and client - side JS)
app.use(express.static(path.join(__dirname, "public")));

//Testing express

// app.get("/", (request, response) => {

//     //do something in here for the / page route
//     response.status(200).send("TEST"); 
   
// });
//set up page routes
app.get("/", (request, response) => {
    response.render("index", { title: "Home"});
});
app.get("/Sneaker", (request, response) => {
    response.render("Sneaker", { title: "Sneaker"});
});
app.get("/formal", (request, response) => {
    response.render("formal", { title: "Formal"});
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });