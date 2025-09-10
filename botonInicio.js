document.addEventListener("DOMContentLoaded", () => {
const formLogin = document.getElementById("formInicioSesion");

  // Usuario fijo
const userDefault = {
    correo: "admin@huerto.cl",
    contrasena: "1234"
};

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    if (correo === userDefault.correo && contrasena === userDefault.contrasena) {
    alert(" Bienvenido Administrador");
      window.location.href = "index.html"; // redirige si es correcto
    } else {
    alert(" Correo o contraseña incorrectos");
    }
});
});
