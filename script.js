// 🌟 Mensaje de bienvenida animado
window.addEventListener("load", () => {
  const bienvenida = document.querySelector("#inicio h2");
  bienvenida.style.opacity = 0;
  bienvenida.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    bienvenida.style.opacity = 1;
  }, 500);
});

// 🎯 Menú desplegable con redirección suave
document.getElementById("menu-desplegable").addEventListener("change", function () {
  const valor = this.value;
  const seccion = document.getElementById(valor);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Sección no disponible aún.");
  }
});

// 📩 Validación de formulario + alerta personalizada
document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre && email && mensaje) {
    alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado con éxito.`);
    document.getElementById("progreso-carga").value = 100;
    this.reset();
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// 🎨 Dibujo en canvas (trenza estilizada abstracta)
const canvas = document.getElementById("dibujo");
if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  // Fondo suave
  ctx.fillStyle = "#FFF8E1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Trenza abstracta con curvas
  ctx.strokeStyle = "#8B5E3C";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(50, 20);
  ctx.bezierCurveTo(80, 60, 120, 20, 150, 60);
  ctx.bezierCurveTo(180, 100, 220, 60, 250, 100);
  ctx.stroke();

  // Detalles decorativos
  ctx.fillStyle = "#E2725B";
  ctx.beginPath();
  ctx.arc(75, 40, 5, 0, Math.PI * 2);
  ctx.arc(175, 80, 5, 0, Math.PI * 2);
  ctx.fill();
}
