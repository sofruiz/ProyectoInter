function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Agregar ceros delante si es necesario
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Obtener la fecha
    let day = now.getDate();
    let month = now.toLocaleString('es-ES', { month: 'long' });
    let year = now.getFullYear();
    let fullDate = `<span style='font-size: 0.4em;'>${day} de ${month} de ${year}</span>`;

    document.getElementById("clock").innerHTML = `${fullDate}<br>${hours}:${minutes}:${seconds}`;
}

// Crear el elemento dentro del contenedor-fecha_hora
window.onload = function() {
    const container = document.querySelector(".contenedor-fecha_hora");
    if (container) {
        const clockDiv = document.createElement("div");
        clockDiv.id = "clock";
        clockDiv.style.fontSize = "4em";
        clockDiv.style.textAlign = "center";
        clockDiv.style.padding = "0px";
        container.appendChild(clockDiv);
    }
    updateClock(); 
    setInterval(updateClock, 1000);
};
