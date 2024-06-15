const express = require("express");
const generateToken = require("../utils/generateToken");

const router = express.Router();

router.get("/", (req, res) => {
  const token = generateToken();
  console.log("Token route accessed, token generated:", token);
  res.json({ token });
});

module.exports = router;
