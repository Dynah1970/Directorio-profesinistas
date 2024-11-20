const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  professionalId: { type: mongoose.Schema.Types.ObjectId, ref: "Professional", required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
  preference: { type: String, enum: ["virtual", "presencial"], required: true },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
