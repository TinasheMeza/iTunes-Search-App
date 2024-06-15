const express = require("express");
const axios = require("axios");

const router = express.Router();

// Route to search by term
router.get("/search", async (req, res) => {
  try {
    const { term, media, limit } = req.query;
    console.log("Search request received:", { term, media, limit });
    const response = await axios.get("https://itunes.apple.com/search", {
      params: { term, media, limit },
    });
    console.log("iTunes API response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch data from iTunes API:", error);
    res.status(500).json({ error: "Failed to fetch data from iTunes API" });
  }
});

// Route to search by media type
router.get("/search/media", async (req, res) => {
  try {
    const { media, limit } = req.query;
    console.log("Media search request received:", { media, limit });
    const response = await axios.get("https://itunes.apple.com/search", {
      params: { media, limit },
    });
    console.log("iTunes API response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch data from iTunes API:", error);
    res.status(500).json({ error: "Failed to fetch data from iTunes API" });
  }
});

// Route to search by entity type
router.get("/search/entity", async (req, res) => {
  try {
    const { entity, limit } = req.query;
    console.log("Entity search request received:", { entity, limit });
    const response = await axios.get("https://itunes.apple.com/search", {
      params: { entity, limit },
    });
    console.log("iTunes API response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch data from iTunes API:", error);
    res.status(500).json({ error: "Failed to fetch data from iTunes API" });
  }
});

module.exports = router;
