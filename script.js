// Copiar correo
document.getElementById("btn-copiar").addEventListener("click", () => {
  const correo = "ivancabo19@gmail.com";
  navigator.clipboard.writeText(correo).then(() => {
    alert("Correo copiado al portapapeles.");
  });
});

// Abrir cliente de correo
document.getElementById("btn-mailto").addEventListener("click", () => {
  window.location.href = "mailto:ivancabo19@gmail.com";
});

// EmailJS: inicializar (pon tu public key)
emailjs.init("VcvKmshr5HEVQASYC"); // Asegúrate de que esta es tu Public Key correcta

// Envío de formulario
document
  .getElementById("form-contacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs
      .sendForm("service_ury4xzp", "template_k9f9iyf", this, "VcvKmshr5HEVQASYC") // Revisa que el service_ID, template_ID y Public Key sean correctos
      .then(() => {
        document.getElementById("mensaje-enviado").classList.remove("oculto");
        this.reset();
      })
      .catch((error) => {
        alert("Error al enviar el mensaje. Intenta más tarde.");
        console.error(error);
      });
  });

// Menú hamburguesa responsive
const menuToggle = document.querySelector('.menu-toggle');
const navbar   = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});