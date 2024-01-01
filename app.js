require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.PORT;

// MIDDLEWARES
app.use(express.urlencoded({ extended: 1 }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Template engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// ROUTES
app.use("/", require("./server/routes/index"));

app.listen(port, () => {
  console.log(`Server Created at ${port}`);
});
