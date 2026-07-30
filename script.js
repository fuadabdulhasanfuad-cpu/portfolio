
// ===============================
// PORTOFOLIO FUAD ABDUL HASAN
// script.js
// ===============================

// Loading Screen
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";
    }, 1200);
});

// Efek Mengetik
const typing = document.querySelector(".typing");

const words = [
    "Rekayasa Perangkat Lunak",
    "Web Developer Pemula",
    "Master of Ceremony",
    "HTML & CSS Developer",
    "Siap Belajar Teknologi Baru"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    } else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Tombol Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Menu Mobile

const menuBtn = document.querySelector(".menu-btn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// Tutup menu setelah klik

document.querySelectorAll("#menu a").forEach(item => {

    item.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// Navbar saat discroll

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,119,182,.92)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    } else {

        navbar.style.background = "rgba(255,255,255,.2)";
        navbar.style.boxShadow = "none";

    }

});

// Animasi muncul saat discroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

const elements = document.querySelectorAll(
".about-card, .card, .photo, .skill, .contact-box");

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

    observer.observe(el);

});

// Efek hover foto

const photos = document.querySelectorAll(".photo img");

photos.forEach(photo => {

    photo.addEventListener("mouseenter", () => {

        photo.style.filter = "brightness(110%)";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.filter = "brightness(100%)";

    });

});

// Tahun otomatis di footer

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Fuad Abdul Hasan | Portfolio Website`;

}

console.log("Website Portofolio Berhasil Dimuat!");
