(function(){
    // Función para volver arriba con animación suave
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Función para mostrar la fecha y hora actual
    function mostrarFechaHora() {
        const fechaHoraElemento = document.getElementById("fecha-hora");
        if (fechaHoraElemento) {
            const ahora = new Date();
            const opciones = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            };
            const fechaHora = ahora.toLocaleDateString('es-ES', opciones);
            fechaHoraElemento.textContent = `📅 ¡Gracias por visitarnos! Sólo por eso te regalaremos la fecha y hora actual 🤑: ${fechaHora}`;
        }
    }

    // Esperar a que el DOM cargue antes de asignar los eventos
    document.addEventListener("DOMContentLoaded", function () {
        let btn = document.getElementById("btn-top");
        if (btn) {
            btn.addEventListener("click", topFunction);
        }

        // Mostrar la fecha y hora al cargar la página
        mostrarFechaHora();

        // Actualizar la fecha y hora cada segundo
        setInterval(mostrarFechaHora, 1000);
    });

})();