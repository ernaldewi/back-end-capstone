const dbPool = require("../config/database.js");

// CREATE
const createNewPatient = (body) => {
  const SQLQuery = `
    INSERT INTO tb_patients
    (username, name, email, password)
    VALUES  
    ('${body.username}', '${body.name}', '${body.email}', '${body.password}')
  `;

  return dbPool.execute(SQLQuery);
};

// READ
const getAllPatient = () => {
  const SQLQuery = "SELECT * FROM tb_patients";
  return dbPool.execute(SQLQuery);
};

// UPDATE
const updatePatient = (body, id) => {
  const SQLQuery = `
    UPDATE tb_patients SET
    username='${body.username}', name='${body.name}', email='${body.email}', password='${body.password}'
    WHERE id=${id}
  `;
  return dbPool.execute(SQLQuery);
};

// DELETE
const deletePatient = (id) => {
  const SQLQuery = `DELETE FROM tb_patients WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllPatient,
  createNewPatient,
  updatePatient,
  deletePatient,
};
