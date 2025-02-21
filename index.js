//Retriving items

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links")

// Adding a event:

menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
}