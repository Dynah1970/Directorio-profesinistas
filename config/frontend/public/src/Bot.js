import React, { useState } from "react";
import axios from "axios";

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);

  // Función para enviar mensaje al bot
  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/bot/interact", {
        sessionId,
        message: input,
      });

      const { sessionId: newSessionId, message } = response.data;

      setSessionId(newSessionId);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: message },
      ]);
    } catch (error) {
      console.error("Error al interactuar con el bot:", error);
    }
  };

  return (
    <div className="bot-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Bot;
