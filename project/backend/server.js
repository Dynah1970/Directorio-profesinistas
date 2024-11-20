const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Configuración
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", require("./routes/users"));
app.use("/api/professionals", require("./routes/professionals"));
app.use("/api/appointments", require("./routes/appointments"));

// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
