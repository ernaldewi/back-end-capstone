require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const middlewareLogRequest = require("./middleware/log.js");
const homeRoutes = require("./routes/home.js");
const usersRoutes = require("./routes/patient.js");
const doctorRoutes = require("./routes/doctor.js");
const bookingRoutes = require("./routes/booking.js");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

// app.method(path, handler) - STATIC RESTFUL API ENDPOINT
app.use("/api", homeRoutes);
app.use("/api/patient", usersRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/booking", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
