const express = require("express");
const router = express.Router();


router.get("/", (req , res) => {
  res.render("index",{
    title: "Home"
  });
})


router.get("/about", (req , res) => {
  res.render("about",{
    title: "About"
  });
})


router.get("/contact", (req , res) => {
  res.render("contact",{
    title: "Contact"
  });
})

router.get("/thank", (req , res) => {
  res.render("thank",{
    title: "Router Website"
  });
})

module.exports = router;