(function(){
    // Función para volver arriba con animación suave
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Esperar a que el DOM cargue antes de asignar el evento
    document.addEventListener("DOMContentLoaded", function () {
        let btn = document.getElementById("btn-top");
        if (btn) {
            btn.addEventListener("click", topFunction);
        }
    });

})();