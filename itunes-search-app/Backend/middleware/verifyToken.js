const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret"; // Use a secure secret key

// Extracts the token from the Authorization header.
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Verifying token:", token);
  if (!token) {
    console.log("No token provided");
    return res.status(403).json({ error: "No token provided" });
  }

  //Uses jwt.verify to check if the token is valid. If the token is valid, it calls 'next()' to proceed to the next middleware or route handler. If not, it responds with an error.
  jwt.verify(token.split(" ")[1], JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("Failed to authenticate token:", err);
      return res.status(500).json({ error: "Failed to authenticate token" });
    }

    console.log("Token authenticated, decoded payload:", decoded);
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
