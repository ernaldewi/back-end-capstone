const express = require("express");
const BookingController = require("../controller/booking.js");
const router = express.Router();

// CREATE - POST
router.post("/", BookingController.createNewBooking);

// READ - GET
router.get("/", BookingController.getAllBooking);

module.exports = router;
