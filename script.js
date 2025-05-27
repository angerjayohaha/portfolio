// Dark mode toggle
document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing effect with multiple phrases cycling
const typingEl = document.getElementById('typing');
const phrases = [
  "Web Developer",
  "Learning Everyday",
  "Soon to be Game Developer",
  "Soon to be Cybersecurity Specialist"
];
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseBetween = 1500;

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  if (!isDeleting) {
    typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, pauseBetween);
      return;
    }
  } else {
    typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
});

// Highlight active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});