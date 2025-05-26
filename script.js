// Typing effect
const phrases = ["a BSIT Student", "a Web Developer", "learning everyday"];
const typingText = document.querySelector(".typing-text");
let index = 0, charIndex = 0;

function type() {
  if (charIndex < phrases[index].length) {
    typingText.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) type();
});

// Dark/Light Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});