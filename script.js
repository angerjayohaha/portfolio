// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
const icon = document.querySelector('.toggle-icon');

// Function to update the icon depending on mode
function updateToggleIcon() {
  if (document.body.classList.contains('dark-mode')) {
    icon.style.backgroundImage = "url('icons/sun.svg')"; // 🌞 for light mode
  } else {
    icon.style.backgroundImage = "url('icons/moon.svg')"; // 🌙 for dark mode
  }
}


// Listen to checkbox toggle
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleIcon();
});

// Initialize icon on page load
document.addEventListener("DOMContentLoaded", () => {
  updateToggleIcon();
  typeLoop(); // keep your typing loop working
});


// Typing effect with multiple phrases cycling
const typingEl = document.getElementById('typing');
const phrases = [
  "BSIT Student",
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