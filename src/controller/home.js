const testHome = (req, res) => {
  try {
    res.json({
      message: "Connection API is Conected",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  testHome,
};
