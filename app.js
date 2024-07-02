const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');

// connect to MongoDB
const dbURI =
  "mongodb+srv://bloguser12:bloguser12@cluster0.g71g7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to DB");
    // listen to requests and
    app.listen(3000);
  })
  .catch((err) => {
    console.log("Error connecting");
  });
// express app
const app = express();

// register view engine configuration
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));   // Takes URL ecoded data and passes to the request object
app.use(morgan("dev"));


// Routes 
app.get("/", (req, res) => {
  res.redirect('/blogs')
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog Routes
app.use('/blogs',blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

