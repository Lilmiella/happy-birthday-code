const app = document.getElementById("app");

// Create Confetti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = Math.random() * -100 + "px";
  confetti.style.backgroundColor = ["#ff69b4", "#ff1493", "#ffb6c1", "#ff4500", "#1e90ff", "#32cd32"][
    Math.floor(Math.random() * 6)
  ];
  confetti.style.width = confetti.style.height = Math.random() * 6 + 4 + "px";
  confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
  confetti.style.animationDelay = Math.random() * 2 + "s";
  app.appendChild(confetti);

  setTimeout(() => confetti.remove(), 3000);
}

setInterval(createConfetti, 200);

// Create Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.top = Math.random() * 80 + "vh";
  heart.style.fontSize = Math.random() * 1.5 + 0.8 + "rem";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  app.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 1000);

// Create Balloons
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 90 + "vw";
  balloon.style.animationDuration = Math.random() * 5 + 5 + "s";

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = ["#ff69b4", "#ff1493", "#ffb6c1", "#ff4500", "#1e90ff", "#32cd32"][
    Math.floor(Math.random() * 6)
  ];

  const string = document.createElement("div");
  string.classList.add("string");

  balloon.appendChild(circle);
  balloon.appendChild(string);
  app.appendChild(balloon);

  setTimeout(() => balloon.remove(), 10000);
}

document.addEventListener("click", (e) => {
  createBalloon();
  createHeart();
});

// Show Wish
const wishes = [
  "Wishing you endless happiness!",
  "May your 16th year be magical!",
  "You're shining brighter than ever!",
  "Cheers to new adventures and dreams!",
  "You're a star — keep shining!",
];

const wishEl = document.createElement("div");
wishEl.id = "wish";
app.appendChild(wishEl);

function showWish() {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  wishEl.textContent = `🎂 ${randomWish} 💖`;
  wishEl.style.display = "block";
  setTimeout(() => {
    wishEl.style.display = "none";
  }, 3000);
}

// Cake SVG
const cakeSVG = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="100" width="120" height="20" fill="#f4a261" />
  <rect x="50" y="80" width="100" height="20" fill="#e9c46a" />
  <rect x="60" y="60" width="80" height="20" fill="#f7fbfc" />
  <g transform="translate(0, 50)">
    <rect x="65" y="10" width="5" height="15" fill="#fa7f72" />
    <rect x="95" y="5" width="5" height="20" fill="#764ba2" />
    <rect x="125" y="10" width="5" height="15" fill="#12c2e9" />
  </g>
  <circle cx="70" cy="5" r="3" fill="#ffcc00" />
  <circle cx="100" cy="0" r="4" fill="#ffcc00" />
  <circle cx="130" cy="5" r="3" fill="#ffcc00" />
</svg>
`;

// Appending content
const content = `
  <h1>🎉 Happy 16th Birthday! 🎉</h1>
  <div style="margin: 20px auto; text-align: center;">${cakeSVG}</div>
  <p style="font-size: 1.2rem; color: #880e4f; margin-bottom: 20px;">Wishing you love, laughter, and endless joy!</p>
  <button onclick="showWish()">Celebrate 🎂</button>
`;

document.getElementById("app").innerHTML = content;