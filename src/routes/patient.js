const express = require("express");
const UserController = require("../controller/patient.js");
const router = express.Router();

// CREATE - POST
router.post("/", UserController.createNewPatient);

// READ - GET
router.get("/", UserController.getAllPatients);

// UPDATE - PATCH
router.patch("/:id", UserController.updateDataPatient);

// DELETE - DELETE
router.delete("/:id", UserController.deleteDataPatient);

module.exports = router;
