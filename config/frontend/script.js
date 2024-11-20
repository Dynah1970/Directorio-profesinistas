document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Capturar datos del formulario
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const reason = document.getElementById("reason").value;
    const contact = document.getElementById("contact").value;
    const preference = document.getElementById("preference").value;
  
    // Validar datos
    if (!name || !profession || !reason || !contact || !preference) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Simular envío
    alert(`¡Gracias, ${name}! Tu cita con el ${profession} ha sido registrada. Razón: ${reason}.`);
  });
  