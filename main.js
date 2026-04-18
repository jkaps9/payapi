// Navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("visible");
  });
}

// Contact Form
const contactForm = document.querySelector("#contact-form");
const successMessage = document.querySelector(".success-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (successMessage) {
      successMessage.classList.add("visible");
    }
    contactForm.reset();
    if (successMessage) {
      setTimeout(() => successMessage.classList.remove("visible"), 5000);
    }
  });
}
