// ── SCROLL ──────────────────────────────────────────────
const titleEl = document.getElementById("title-text");
const taglineEl = document.getElementById("tagline-text");
const lineEl = document.getElementById("title-line");
const heroEl = document.getElementById("hero");

window.addEventListener(
  "scroll",
  () => {
    const p = Math.min(window.scrollY / heroEl.offsetHeight, 1);
    const size = 7 - (7 - 2) * p;
    titleEl.style.fontSize = `clamp(2.5rem, ${size}vw, ${size}rem)`;
    taglineEl.style.opacity = Math.max(0, 1 - p * 2.5);
    lineEl.style.opacity = Math.max(0, 1 - p * 3);
  },
  { passive: true },
);

// ── CARRUSEL ──────────────────────────────────────────────
const slides = [
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
  { label: "", img: "assets/images/captura1.png" },
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
