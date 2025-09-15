// [POSITIVO] Buena práctica esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");

    // [POSITIVO] Buen manejo del evento submit del formulario
    form.addEventListener("submit", (e) => {
        // [POSITIVO] Buena práctica usar trim() para limpiar espacios
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const contraseña = document.getElementById("password").value.trim();
        const confirmar = document.getElementById("confirmar").value.trim();


        // [MEJORAR] Eliminar console.logs de producción
        console.log(nombre)
        console.log(correo)
        console.log(telefono)
        console.log(contraseña)
        console.log(confirmar)

          if(!nombre || !correo || !telefono || !contraseña || !confirmar) {
            alert("¡Todos los campos son obligatorios!");
            return;
          }

          const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!regexCorreo.test(correo)){
            alert("Ingreasa un correo válido.");
            return;
          }

          const regexTelefono = /^[0-9]{8,15}$/;
          if (!regexTelefono.test(telefono)) {
            alert(" Ingresa un numero telefonico valido.")
          }

          if (contraseña !== confirmar) {
            alert("Las contraseñas no coinciden");
            return;
          }

          alert(`Bienvenido/a ${nombre}, Tu registro fue exitoso.`);


        form.reset();
    })
}) 