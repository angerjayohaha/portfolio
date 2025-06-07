// Dark mode toggle elements
const toggle = document.getElementById('theme-toggle');
const icon = document.querySelector('.toggle-icon');

// Update the toggle icon based on mode
function updateToggleIcon() {
  if (document.body.classList.contains('dark-mode')) {
    icon.style.backgroundImage = "url('icons/moon.svg')"; // Moon icon for dark mode
  } else {
    icon.style.backgroundImage = "url('icons/sun.svg')";  // Sun icon for light mode
  }
}

// Listen for toggle switch change
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleIcon();
});

// Typing effect elements and config
const typingEl = document.getElementById('typing');
const phrases = [
  "BSIT Student",
  "Learning Everyday",
  "Soon to be Game Developer",
  "Soon to be Cybersecurity Specialist"
];
const typingSpeed = 120;
const erasingSpeed = 80;
const pauseBetween = 3000;

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Main typing loop function
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

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateToggleIcon();
  typeLoop();
});

// Scroll animation (Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }

    });
  }, {
    threshold: 0.15 // 15% visible bago mag-trigger
  });

  animatedElements.forEach(el => observer.observe(el));
});