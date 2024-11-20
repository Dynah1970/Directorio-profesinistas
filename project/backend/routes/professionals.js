const express = require("express");
const router = express.Router();
const { getProfessionals, addProfessional } = require("../controllers/professionalController");

router.get("/", getProfessionals);
router.post("/", addProfessional);

module.exports = router;
