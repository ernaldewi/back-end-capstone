const dbPool = require("../config/database.js");

// CREATE
const createBooking = (body) => {
  const SQLQuery = `
  INSERT INTO tb_bookings
  (id_doctor, id_patient, date)
  VALUES  
  ('${body.id_doctor}', '${body.id_patient}', '${body.date}')
`;

  return dbPool.execute(SQLQuery);
};
// READ
const getAllBooking = () => {
  const SQLQuery = `SELECT * FROM tb_bookings`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  createBooking,
  getAllBooking,
};
