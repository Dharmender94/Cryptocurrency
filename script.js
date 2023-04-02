let hamburgerMenu = document.getElementById("hamburger-icon");
let navbar = document.getElementById("nav-items");
let closeicon = document.getElementById("close-icon");
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (closeicon) {
  closeicon.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}