document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!email || !password || !role) {
    error.textContent = "Completa todos los campos y selecciona un rol.";
    return;
  }

  const usuarios = [
    { email: "cli@homeplus.com", password: "1234", rol: "cliente" },
    { email: "pro@homeplus.com", password: "5678", rol: "profesional" }
  ];

  const usuarioValido = usuarios.find(user =>
    user.email === email &&
    user.password === password &&
   
  );

  if (usuarioValido) {
    error.textContent = "";
    alert(`¡Inicio exitoso! Usted se registro como ${role}.`);

    if (role === "cliente") {
      window.location.href = "/confirmacion y agendamiento/home/html/trabajosaceptados.html";
    } else if (role === "profesional") {
      window.location.href = "/Servicios Publicados/serviciosPublicados.html";
    }
  } else {
    error.textContent = "Correo, contrasena o rol incorrecto.";
  }
});
