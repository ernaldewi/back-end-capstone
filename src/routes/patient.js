const express = require("express");
const PatientController = require("../controller/patient.js");
const router = express.Router();

// CREATE - POST
router.post("/", PatientController.createNewPatient);

// READ - GET
router.get("/", PatientController.getAllPatients);

// UPDATE - PATCH
router.patch("/:id", PatientController.updateDataPatient);

// DELETE - DELETE
router.delete("/:id", PatientController.deleteDataPatient);

module.exports = router;
