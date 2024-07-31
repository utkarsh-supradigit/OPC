import './style.css'

const mobileMenuIcon = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-menu");
const mobileMenuCloseIcon = document.querySelector(".close")

mobileMenuCloseIcon.addEventListener("click", event => {
    mobileNav.style.transform = "translateX(100%)";
})

mobileMenuIcon.addEventListener("click", event => {
    mobileNav.style.transform = "translateX(0)";
})
