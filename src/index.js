require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const usersRoutes = require("./routes/patient.js");
const middlewareLogRequest = require("./middleware/log.js");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

// app.method(path, handler)
app.use("/patient", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
