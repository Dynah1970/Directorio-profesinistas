import React from "react";
import "./bot.css";  

import Bot from "./Bot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido al Bot de Doctoralia</h1>
        <p>Estamos aquí para ayudarte a agendar tus citas con profesionales médicos, abogados, y contadores.</p>
        
        <div className="bot-container">
          <Bot />
        </div>
      </header>
    </div>
  );
}

export default App;
