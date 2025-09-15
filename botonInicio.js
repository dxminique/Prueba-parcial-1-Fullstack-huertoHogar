// [POSITIVO] Uso correcto de DOMContentLoaded para asegurar carga del DOM
document.addEventListener("DOMContentLoaded", () => {
const formLogin = document.getElementById("formInicioSesion");


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
      window.location.href = "index.html"; 
    } else {
    alert(" Correo o contraseña incorrectos");
    }
});

});
