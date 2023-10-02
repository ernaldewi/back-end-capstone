const express = require("express");
const HomeController = require("../controller/home.js");
const router = express.Router();

// READ - GET
router.get("/", HomeController.testHome);

module.exports = router;
