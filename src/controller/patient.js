const PatientModel = require("../models/tb_patiens.js");

// CREATE
const createNewPatient = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await PatientModel.createNewPatient(body);
    res.json({
      message: "CREATE new patient success",
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
const getAllPatients = async (req, res) => {
  try {
    const [data] = await PatientModel.getAllPatient();
    res.json({
      message: "GET all data patient success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// UPDATE
const updateDataPatient = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await PatientModel.updatePatient(body, id);
    res.json({
      message: "UPDATE data patient success",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// DELETE
const deleteDataPatient = async (req, res) => {
  const { id } = req.params;
  try {
    await PatientModel.deletePatient(id);
    res.json({
      message: "DELETE data patient success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllPatients,
  createNewPatient,
  updateDataPatient,
  deleteDataPatient,
};
