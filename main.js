// ── SCROLL ──────────────────────────────────────────────
const titleEl = document.getElementById("title-text");
const taglineEl = document.getElementById("tagline-text");
const lineEl = document.getElementById("title-line");
const heroEl = document.getElementById("hero");

// ── CARRUSEL ──────────────────────────────────────────────
const slides = [
  { label: "", img: "assets/images/1.png" },
  { label: "", img: "assets/images/2.png" },
  { label: "", img: "assets/images/3.png" },
  { label: "", img: "assets/images/5.png" },
  { label: "", img: "assets/images/6.png" },
];

const track = document.getElementById("carousel-track");
const dotsEl = document.getElementById("carousel-dots");
let current = 0;
let isAnimating = false;

slides.forEach((s, i) => {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  slide.innerHTML = `<img src="${s.img}" alt="${s.label}" draggable="false">`;
  track.appendChild(slide);

  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.onclick = () => goTo(i);
  dotsEl.appendChild(dot);
});

function goTo(i) {
  if (isAnimating) return;
  isAnimating = true;
  current = ((i % slides.length) + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  document
    .querySelectorAll(".dot")
    .forEach((d, j) => d.classList.toggle("active", j === current));
  setTimeout(() => (isAnimating = false), 500);
}

function moveCarousel(dir) {
  goTo(current + dir);
}

setInterval(() => goTo(current + 1), 5000);
