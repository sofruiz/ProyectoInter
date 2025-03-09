(function(){
    // obtener elementos
    var form = document.getElementById('miFormulario'),
        nombre = document.getElementById('nombre'),
        email = document.getElementById('email'),
        password = document.getElementById('password'),
        respuesta = document.getElementsByName('respuesta'),
        sabiduria = document.getElementById('sabiduria'),
        
        // obtener error
        errorNombre = document.getElementById('errorNombre'),
        errorEmail = document.getElementById('errorEmail'),
        errorPassword = document.getElementById('errorPassword'),
        errorRadio = document.getElementById('errorRadio'),
        errorSabiduria = document.getElementById('errorSabiduria');

    // validar el nombre
    function validateNombre(e) {
        if(nombre.value.trim() === ''){
            errorNombre.textContent = "   Por favor, ingresa tu nombre.";
            console.log("Nombre no ingresado");
            e.preventDefault();
        }
    }
    //  validar el email
    function validateEmail(e) {
        if(email.value.trim() === ''){
            errorEmail.textContent = "   Por favor, ingresa tu correo electrónico.";
            console.log("Correo no ingresado");
            e.preventDefault();
        }
    }
    // validar la contraseña
    function validatePassword(e) {
        if(password.value.trim() === ''){
            errorPassword.textContent = "   Por favor, ingresa tu contraseña.";
            console.log("Contraseña no ingresada");
            e.preventDefault();
        }
    }
    //validar radio
    function validateRespuesta(e) {
        var selected = false;
        for(var i = 0; i < respuesta.length; i++){
            if(respuesta[i].checked){
                selected = true;
                break;
            }
        }
        if(!selected){
            errorRadio.textContent = "   Por favor, responde si hoy es un buen día.";
            console.log("Respuesta no seleccionada");
            e.preventDefault();
        }
    }

    // validar numeros
    function validateSabiduria(e) {
        if(sabiduria.value.trim() === ''){
            errorSabiduria.textContent = "   Por favor, ingresa un valor para la sabiduría.";
            console.log("Sabiduría no ingresada");
            e.preventDefault();
        } else {
            var valor = parseInt(sabiduria.value, 10);
            if(isNaN(valor) || valor < 0 || valor > 100){
                errorSabiduria.textContent = "El número debe estar entre 0 y 100.";
                console.log("Valor de sabiduría inválido");
                e.preventDefault();
            }
        }
    }



    //funcion check 
    function validateForm(e) {

        // cada validacion
        validateNombre(e);
        validateEmail(e);
        validatePassword(e);
        validateRespuesta(e);
        validateSabiduria(e);
    }

    //cuando se usa submit
    form.addEventListener('submit', validateForm);

    // Función para volver arriba con animación suave
    let btn = document.getElementById("btn-top");
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})();