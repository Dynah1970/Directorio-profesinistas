const mongoose = require("mongoose");

const botSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // Opcional si el usuario aún no está registrado
  currentStep: { type: String, default: "start" },
  responses: { type: Map, of: String }, // Almacena preguntas y respuestas
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BotSession", botSessionSchema);
