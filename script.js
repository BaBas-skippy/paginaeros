const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-content");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        // Mostrar la sección seleccionada y ocultar las demás
        sections.forEach(sec => sec.style.display = "none");
        document.getElementById(target).style.display = "block";

        // Mover imágenes a los laterales
        img1.classList.add("lateral-izq");
        img2.classList.add("lateral-der");
    });
});
