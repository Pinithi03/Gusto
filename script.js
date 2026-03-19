const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            navbar.classList.add("scroll-down");
            navbar.classList.remove("scroll-up");
        } else {
            navbar.classList.add("scroll-up");
            navbar.classList.remove("scroll-down");
        }
    } else {
        navbar.classList.remove("scroll-down");
        navbar.classList.remove("scroll-up");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");

    if (navMenu.classList.contains("show")) {
        hamburger.setAttribute("aria-label", "Close menu");
    } else {
        hamburger.setAttribute("aria-label", "Open menu");
    }
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-label", "Open menu");
    });
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-label", "Open menu");
    }
});