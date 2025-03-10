document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe sin validar
        validarFormulario();
    });

    function validarFormulario() {
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let edad = document.getElementById("edad").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let comentario = document.getElementById("comentario").value.trim();

        // Borrar mensajes de error previos
        limpiarErrores();

        let errores = false;

        // Validar nombre
        if (nombre === "") {
            mostrarError("error-nombre", "El nombre no puede estar vacío.");
            errores = true;
        }

        // Validar email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError("error-email", "Introduce un correo electrónico válido.");
            errores = true;
        }

        // Validar edad
        if (edad === "" || isNaN(edad) || edad < 1) {
            mostrarError("error-edad", "Ingresa una edad válida.");
            errores = true;
        }

        // Validar teléfono (mínimo 8 dígitos)
        let telefonoRegex = /^[0-9]{8,}$/;
        if (!telefonoRegex.test(telefono)) {
            mostrarError("error-telefono", "El teléfono debe tener al menos 8 dígitos numéricos.");
            errores = true;
        }

        // Validar comentario
        if (comentario.length < 10) {
            mostrarError("error-comentario", "El comentario debe tener al menos 10 caracteres.");
            errores = true;
        }

        // Si no hay errores, enviar el formulario
        if (!errores) {
            alert("Formulario enviado correctamente.");
            formulario.submit();
        }
    }

    function mostrarError(id, mensaje) {
        document.getElementById(id).textContent = mensaje;
    }

    function limpiarErrores() {
        let errores = document.querySelectorAll(".error");
        errores.forEach(error => error.textContent = "");
    }
});
