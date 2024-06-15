const jwt = require("jsonwebtoken");

// Use a secure secret key
const JWT_SECRET = "your_jwt_secret";

// Contains the data we want to include in the token
const payload = { name: "API Access" };

// Function generates the token using the payload and secret key
const generateToken = () => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  console.log("Generated JWT Token:", token);
  return token;
};

module.exports = generateToken;
