const express = require("express");
const cors = require("cors");
const itunesRoutes = require("./routes/itunesRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const verifyToken = require("./middleware/verifyToken");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Middleware for CORS
app.use(cors());

// Token route to get a new token
app.use("/api/token", tokenRoutes);

// Use the itunesRoutes with JWT verification
//VerifyToken added before itunesRoutes to ensure all request to API are authenticated
app.use("/api", verifyToken, itunesRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
