document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    menuIcon.addEventListener("click", function() {
        hamburgerMenu.classList.toggle("active");
    });
});