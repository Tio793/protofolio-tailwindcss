// Navbar Fixed

window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
}




// Hamburger

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function checkScreenSize() {
    if (window.innerWidth >= 1024) {
        navMenu.classList.remove("hidden", "scale-y-0");
        navMenu.classList.add("lg:block");
    } else {
        navMenu.classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", checkScreenSize);

window.addEventListener("resize", checkScreenSize);

hamburger.addEventListener("click", function () {
    this.classList.toggle("hamburger-active");

    if (window.innerWidth < 1024) { 
        if (navMenu.classList.contains("hidden")) {
            navMenu.classList.remove("hidden");
            setTimeout(() => {
                navMenu.classList.remove("scale-y-0");
                navMenu.classList.add("scale-y-100");
            }, 10);
        } else {
            navMenu.classList.remove("scale-y-100");
            navMenu.classList.add("scale-y-0");
            setTimeout(() => {
                navMenu.classList.add("hidden");
            }, 300);
        }
    }
});
