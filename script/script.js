const header = document.querySelector("header");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function closeMenu() {
  navMenu.classList.add("hidden", "scale-y-0");
  navMenu.classList.remove("scale-y-100");
  hamburger.classList.remove("hamburger-active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Buka menu navigasi");
}

function updateHeader() {
  header.classList.toggle("navbar-fixed", window.scrollY > 0);
  if (window.innerWidth >= 1024) {
    navMenu.classList.remove("hidden", "scale-y-0");
    navMenu.classList.add("scale-y-100");
  } else if (!hamburger.classList.contains("hamburger-active")) {
    closeMenu();
  }
}

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
    return;
  }

  navMenu.classList.remove("hidden", "scale-y-0");
  navMenu.classList.add("scale-y-100");
  hamburger.classList.add("hamburger-active");
  hamburger.setAttribute("aria-expanded", "true");
  hamburger.setAttribute("aria-label", "Tutup menu navigasi");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024) closeMenu();
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", updateHeader);
updateHeader();

// Keep animated content readable when IntersectionObserver is unavailable.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("text-show", "text-lead");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".text-hidden, .text-up").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".text-hidden, .text-up").forEach((element) => {
    element.classList.add("text-show", "text-lead");
  });
}

const posterModal = document.getElementById("poster-modal");
const posterModalImage = document.getElementById("poster-modal-image");
const posterModalTitle = document.getElementById("poster-modal-title");
const posterModalDescription = document.getElementById("poster-modal-description");
const posterCloseButton = posterModal.querySelector("[data-poster-close]");
let posterTriggerToRestore = null;

document.querySelectorAll("[data-poster-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const card = trigger.closest("[data-poster-card]");
    const image = trigger.querySelector("img");
    posterTriggerToRestore = trigger;
    posterModalImage.src = image.currentSrc || image.src;
    posterModalImage.alt = image.alt;
    posterModalTitle.textContent = card.querySelector("h3").textContent.trim();
    posterModalDescription.textContent = card.querySelector("p").textContent.trim();
    posterModal.showModal();
    posterCloseButton.focus();
  });
});

posterCloseButton.addEventListener("click", () => posterModal.close());
posterModal.addEventListener("click", (event) => {
  if (event.target === posterModal) posterModal.close();
});
posterModal.addEventListener("close", () => {
  if (posterTriggerToRestore) posterTriggerToRestore.focus();
});
