// ── SCROLL: encoge el título ──────────────────────────────
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

// ── VÍDEO placeholder ─────────────────────────────────────
function handlePlay() {
  alert(
    'Sustituye #video-placeholder en index.html por:\n\n<iframe src="https://www.youtube.com/embed/TU_ID" style="width:100%;aspect-ratio:16/9;display:block;border:none;" allowfullscreen></iframe>',
  );
}

// ── CARRUSEL ──────────────────────────────────────────────
const slides = [
  { label: "Descripcion 1", img: "assets/images/captura1.png" },
  { label: "Descripcion 2", img: "assets/images/captura1.png" },
  { label: "Descripcion 3", img: "assets/images/captura1.png" },
  { label: "Descripcion 4", img: "assets/images/captura1.png" },
  { label: "Descripcion 5", img: "assets/images/captura1.png" },
];

const track = document.getElementById("carousel-track");
const dotsEl = document.getElementById("carousel-dots");
let current = 0;
const SLIDE_W = 360 + 20;

slides.forEach((s, i) => {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  slide.innerHTML = `
    <div class="slide-inner">
      <img src="${s.img}" alt="${s.label}" style="width:100%;height:100%;object-fit:cover;display:block;">
      <div class="slide-label">${s.label}</div>
    </div>`;
  track.appendChild(slide);

  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.onclick = () => goTo(i);
  dotsEl.appendChild(dot);
});

function goTo(i) {
  current = Math.max(0, Math.min(i, slides.length - 1));
  track.style.transform = `translateX(-${current * SLIDE_W}px)`;
  document
    .querySelectorAll(".dot")
    .forEach((d, j) => d.classList.toggle("active", j === current));
}

function moveCarousel(dir) {
  goTo(current + dir);
}

setInterval(() => goTo((current + 1) % slides.length), 4500);
