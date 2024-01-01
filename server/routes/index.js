const express = require("express");

const router = express.Router();
const mainController = require("../controllers/mainController");

// HOMEPAGE
router.get("/", mainController.homepage);

// ABOUT
router.get("/about", mainController.about);

module.exports = router;
