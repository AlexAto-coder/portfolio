const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("activo");
});

const enlacesMenu = document.querySelectorAll(".nav-list a");

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        navList.classList.remove("activo");
    });
});