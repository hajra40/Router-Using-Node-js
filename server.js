const express = require("express");
const path = require("path");
const router = require("./routes/router")
const app = express();
// const img = require('.')

app.set("view engine","ejs");

app.get( "/" , (req , res) => {
  res.render('index', {
    title: "Router Website"
  });
})

// localhost:5000/about
app.use('/',router);


app.listen(5000,()=>{console.log("What??")})

