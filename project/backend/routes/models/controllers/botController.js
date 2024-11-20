const BotSession = require("../models/BotSession");

// Preguntas predefinidas del bot
const botQuestions = {
  start: "¡Hola! ¿Cuál es tu nombre?",
  name: "Gracias. ¿Cuál es tu correo electrónico?",
  email: "Perfecto. ¿Prefieres una cita presencial o virtual?",
  preference: "Entendido. ¿Cuál es la razón de tu consulta?",
  reason: "¡Gracias! Hemos recopilado tu información. Pronto un profesional se pondrá en contacto contigo.",
};

// Lógica de interacción del bot
const interactWithBot = async (req, res) => {
  const { sessionId, message } = req.body;

  try {
    // Buscar sesión activa del bot o crear una nueva
    let session = await BotSession.findById(sessionId);

    if (!session) {
      session = new BotSession();
      await session.save();
    }

    // Determinar el paso actual del bot
    const currentStep = session.currentStep;
    const nextStep = getNextStep(currentStep);

    // Guardar respuesta del usuario
    if (currentStep !== "start") {
      session.responses.set(currentStep, message);
    }

    // Avanzar al siguiente paso
    if (nextStep) {
      session.currentStep = nextStep;
      await session.save();
      res.status(200).json({
        sessionId: session._id,
        message: botQuestions[nextStep],
      });
    } else {
      // Finalizar interacción
      res.status(200).json({
        sessionId: session._id,
        message: botQuestions[currentStep], // Mensaje final
        responses: Object.fromEntries(session.responses), // Enviar respuestas al cliente
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al interactuar con el bot", error });
  }
};

// Función para obtener el siguiente paso
const getNextStep = (currentStep) => {
  const steps = ["start", "name", "email", "preference", "reason"];
  const currentIndex = steps.indexOf(currentStep);
  return currentIndex >= 0 && currentIndex < steps.length - 1
    ? steps[currentIndex + 1]
    : null;
};

module.exports = { interactWithBot };
