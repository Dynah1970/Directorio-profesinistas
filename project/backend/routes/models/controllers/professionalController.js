const Professional = require("../models/Professional");

// Obtener lista de profesionistas
const getProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.status(200).json(professionals);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener profesionistas" });
  }
};

// Agregar un nuevo profesionista
const addProfessional = async (req, res) => {
  const { name, profession, cedula, email } = req.body;

  try {
    const professional = new Professional({ name, profession, cedula, email });
    await professional.save();
    res.status(201).json(professional);
  } catch (error) {
    res.status(400).json({ message: "Error al agregar profesionista" });
  }
};

module.exports = { getProfessionals, addProfessional };

