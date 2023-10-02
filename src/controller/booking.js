const BookingModel = require("../models/tb_bookings.js");

// CREATE
const createNewBooking = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await BookingModel.createBooking(body);
    res.json({
      message: "CREATE new booking success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// READ
const getAllBooking = async (req, res) => {
  try {
    const [data] = await BookingModel.getAllBooking();
    res.json({
      message: "GET all data booking success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  createNewBooking,
  getAllBooking,
};
