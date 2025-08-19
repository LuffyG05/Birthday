// Typing animation
const text = "Happy Birthday, Nachu 💖";
let i = 0;
const typingTarget = document.getElementById("typing-text");

function type() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Heart cursor
const cursor = document.querySelector('.cursor-heart');
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Music widget logic
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const musicStatus = document.getElementById("music-status");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!musicPlaying) {
    music.play();
    musicStatus.textContent = "♪ Playing: Sunny Day";
    musicBtn.textContent = "⏸️";
  } else {
    music.pause();
    musicStatus.textContent = "♪ Paused";
    musicBtn.textContent = "▶️";
  }
  musicPlaying = !musicPlaying;
});
