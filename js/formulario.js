(function(){
    // Obtener elementos del formulario
    var form = document.getElementById('miFormulario'),
        nombre = document.getElementById('nombre'),
        email = document.getElementById('email'),
        password = document.getElementById('password'),
        respuesta = document.getElementsByName('respuesta'),
        sabiduria = document.getElementById('sabiduria'),

        // Elementos de error
        errorNombre = document.getElementById('errorNombre'),
        errorEmail = document.getElementById('errorEmail'),
        errorPassword = document.getElementById('errorPassword'),
        errorRadio = document.getElementById('errorRadio'),
        errorSabiduria = document.getElementById('errorSabiduria');

    // Función para resetear los mensajes de error
    function resetErrors() {
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorPassword.textContent = "";
        errorRadio.textContent = "";
        errorSabiduria.textContent = "";
    }

    // Validar el nombre
    function validateNombre() {
        if (nombre.value.trim() === '') {
            errorNombre.textContent = "   Por favor, ingresa tu nombre.";
            console.log("Nombre no ingresado");
            return false;
        }
        return true;
    }

    // Validar el email
    function validateEmail() {
        if (email.value.trim() === '') {
            errorEmail.textContent = "   Por favor, ingresa tu correo electrónico.";
            console.log("Correo no ingresado");
            return false;
        }
        return true;
    }

    // Validar la contraseña
    function validatePassword() {
        if (password.value.trim() === '') {
            errorPassword.textContent = "   Por favor, ingresa tu contraseña.";
            console.log("Contraseña no ingresada");
            return false;
        }
        return true;
    }

    // Validar radio (pregunta de "hoy es un buen día")
    function validateRespuesta() {
        var selected = false;
        for (var i = 0; i < respuesta.length; i++) {
            if (respuesta[i].checked) {
                selected = true;
                break;
            }
        }
        if (!selected) {
            errorRadio.textContent = "   Por favor, responde si hoy es un buen día.";
            console.log("Respuesta no seleccionada");
            return false;
        }
        return true;
    }

    // Validar el número de sabiduría
    function validateSabiduria() {
        if (sabiduria.value.trim() === '') {
            errorSabiduria.textContent = "   Por favor, ingresa un valor para la sabiduría.";
            console.log("Sabiduría no ingresada");
            return false;
        } 
        var valor = parseInt(sabiduria.value, 10);
        if (isNaN(valor) || valor < 0 || valor > 100) {
            errorSabiduria.textContent = "El número debe estar entre 0 y 100.";
            console.log("Valor de sabiduría inválido");
            return false;
        }
        return true;
    }

    // Función principal de validación
    function validateForm(e) {
        resetErrors();  // Limpiar errores previos

        // Ejecutar todas las validaciones y detener el envío si hay errores
        if (!validateNombre() || !validateEmail() || !validatePassword() || !validateRespuesta() || !validateSabiduria()) {
            e.preventDefault();
        }
    }

    // Ejecutar la validación en el evento submit
    form.addEventListener('submit', validateForm);
})();
