const customeError = (err, res, req) => {
  res.status(500).json({ msg: err });
};

module.exports = customeError;
