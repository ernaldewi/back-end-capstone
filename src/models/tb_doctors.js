const dbPool = require("../config/database.js");

// READ
const getAllDoctor = () => {
  const SQLQuery = "SELECT * FROM tb_doctors";
  return dbPool.execute(SQLQuery);
};

// EXPORT
module.exports = {
  getAllDoctor,
};
