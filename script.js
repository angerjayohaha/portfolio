const roles = ["Cybersecurity Enthusiast", "Aspiring Game Developer", "BSIT Student"];
let currentIndex = 0;
let currentChar = 0;
let typingSpeed = 100;
let deletingSpeed = 50;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
  const currentRole = roles[currentIndex];
  if (!isDeleting) {
    typingElement.textContent = currentRole.slice(0, currentChar + 1);
    currentChar++;
    if (currentChar === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentRole.slice(0, currentChar - 1);
    currentChar--;
    if (currentChar === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();

/* DARK MODE TOGGLE */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", themeToggle.checked);
});