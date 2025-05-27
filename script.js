// Dark mode toggle
document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing effect for the home section
const typingText = "BSIT student, learning everyday";
let charIndex = 0;

function typeEffect() {
  const typingEl = document.getElementById("typing");
  if (charIndex < typingText.length) {
    typingEl.textContent += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
