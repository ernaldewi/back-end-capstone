const express = require("express");
const DoctorController = require("../controller/doctor.js");
const router = express.Router();

// READ - GET
router.get("/", DoctorController.getAllDoctor);

module.exports = router;
