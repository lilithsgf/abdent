//transicion de las letras, arriba, abajo, derecha o izquierda
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        
        document.getElementById("contenedor-nav").classList.add("show");
        document.getElementById("img-cirujia-princi").classList.add("show");
        document.getElementById("titulo-principal1").classList.add("show");
        document.getElementById("parrafo-principal").classList.add("show");
        document.getElementById("contenedor-contacto").classList.add("show");
        
    }, 500); // Espera 500ms y luego aplica la clase "show" a varios elementos.  Con 500ms, los elementos aparecían medio segundo después de cargar la página
});
//transicion cuando baja la pagina

document.addEventListener("DOMContentLoaded", function () {
// Selecciona todos los elementos que deseas animar
let elementos = document.querySelectorAll(".contenedor-parrafo, .parrafo-imagen-lista,.btn-wsp,.contenedor2, .contenedor-pregu-frecuente, .sede-dir, .titulo-sede");

// Configura el Intersection Observer
let observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }
});
}, { threshold: 0.0 });

// Observa cada elemento
elementos.forEach(el => observer.observe(el));
});