require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const app = express();
const port = 5000 || process.env.PORT;

app.use(passport.initialize());
app.use(passport.session());

// MIDDLEWARES
app.use(express.urlencoded({ extended: 1 }));
app.use(express.json());

// Connection to the databases...
connectDB();

// Static Files
app.use(express.static("public"));

// Template engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// ROUTES
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/auth"));
app.use("/", require("./server/routes/dashboard"));

//HANDLING 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server Created at ${port}`);
});
