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

// Fungsi untuk menyesuaikan tampilan berdasarkan ukuran layar
function checkScreenSize() {
    if (window.innerWidth >= 1024) {
        // Tampilkan menu di desktop
        navMenu.classList.remove("hidden", "scale-y-0");
        navMenu.classList.add("lg:block", "scale-y-100");
    } else {
        // Sembunyikan menu di mobile
        navMenu.classList.add("hidden", "scale-y-0");
        navMenu.classList.remove("lg:block", "scale-y-100");
    }
}

// Jalankan saat halaman pertama kali dimuat
checkScreenSize();

// Event listener untuk resize layar
window.addEventListener("resize", checkScreenSize);

// Event listener untuk klik tombol hamburger
hamburger.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
        // Buka menu dengan animasi
        navMenu.classList.remove("hidden", "scale-y-0");
        navMenu.classList.add("scale-y-100");
    } else {
        // Tutup menu dengan delay agar animasi terlihat
        navMenu.classList.remove("scale-y-100");
        setTimeout(() => {
            navMenu.classList.add("hidden", "scale-y-0");
        }, 300); // Delay untuk transisi agar tidak langsung hilang
    }
});

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

document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".text-hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("text-show");
                observer.unobserve(entry.target); // Animasi hanya terjadi sekali
            }
        });
    }, { threshold: 0.2 });

    texts.forEach(text => {
        observer.observe(text);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text1 = "Hallo Teman Teman 👋, saya";
    const text2 = "Prasthio Karim";
    const typingText = document.getElementById("typing-text");
    const typingName = document.getElementById("typing-name");
    let index1 = 0;
    let index2 = 0;

    function typeWriter1() {
        if (index1 < text1.length) {
            typingText.innerHTML += text1.charAt(index1);
            index1++;
            setTimeout(typeWriter1, 100); // Kecepatan mengetik
        } else {
            setTimeout(typeWriter2, 500); // Tunggu 500ms sebelum mengetik teks kedua
        }
    }

    function typeWriter2() {
        if (index2 < text2.length) {
            typingName.innerHTML += text2.charAt(index2);
            index2++;
            setTimeout(typeWriter2, 100);
        }
    }

    typeWriter1();
});

document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".text-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("text-lead");
                observer.unobserve(entry.target); // Animasi hanya terjadi sekali
            }
        });
    }, { threshold: 0.2 });

    texts.forEach(text => {
        observer.observe(text);
    });
});