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

  // Toggle emoji icon
  if (document.body.classList.contains("light-mode")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});

// Scroll animation for fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.1 }
);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
