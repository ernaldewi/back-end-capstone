const DoctorModel = require("../models/tb_doctors.js");

const getAllDoctor = async (req, res) => {
  try {
    const [data] = await DoctorModel.getAllDoctor();
    res.json({
      message: "GET all data Doctor success",
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
  getAllDoctor,
};
