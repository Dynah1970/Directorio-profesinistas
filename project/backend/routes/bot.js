const express = require("express");
const router = express.Router();
const { interactWithBot } = require("../controllers/botController");

// Endpoint principal del bot
router.post("/interact", interactWithBot);

module.exports = router;
