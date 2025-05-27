// Dark mode toggle
document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing effect for dynamic roles
const phrases = [
  "Soon-to-be Game Developer",
  "Cybersecurity Specialist"
];
let phraseIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenPhrases = 2000;

const typingEl = document.getElementById("typing");

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typingEl.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    phraseIndex++;
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    setTimeout(type, typingSpeed + 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) setTimeout(type, delayBetweenPhrases);
});