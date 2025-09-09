document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");

    form.addEventListener("submit", (e) => {

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const contraseña = document.getElementById("password").value.trim();
        const confirmar = document.getElementById("confirmar").value.trim();

          if(!nombre || !correo || !telefono || !contraseña || !confirmar) {
            alert("¡Todos los campos son obligatorios!");
            return;
          }

          const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!regexCorreo.test(correo)){
            alert("ingreasa un correo válido.");
            return;
          }

          const regexTelefono = /^[0-9]{8,15}$/;
          if (!regexTelefono.test(telefono)) {
            alert(" ingresa un numero telefonico valido.")
          }

          if (contraseña !== confirmar) {
            alert("las contraseñas no coinsiden");
            return;
          }

          alert(`Bienvenido/a ${nombre}, tu registro fue exitoso.`);


        form.reset();
    })
}) 