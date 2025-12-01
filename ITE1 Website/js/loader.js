// loading animation handler
const loader = document.getElementById("loader");
const loadingContainer = document.querySelector(".loading-container");
const homepage = document.getElementById("homepage");

loader.addEventListener("animationend", (e) => {
  if (e.animationName === "fadeOut") { // hihintayin niyang matapos 'yung fadeOut animation
    loadingContainer.style.display = "none";
    homepage.classList.add("show");
    document.body.classList.remove("loading"); // <-- enable scrolling
  }
});

// random hero image selector
const heroImages = document.querySelectorAll('.hero-image');
let current = 0;

function nextHero() {
  heroImages[current].classList.remove('active');
  current = (current + 1) % heroImages.length;
  heroImages[current].classList.add('active');
}

// Start slideshow every 5 seconds
setInterval(nextHero, 5000);

// navigation bar scroll behavior
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    nav.classList.add("show-nav");
  } else {
    nav.classList.remove("show-nav");
  }
});

// bestsellers slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".arrow.right");
const prev = document.querySelector(".arrow.left");
const fullMenuBtn = document.getElementById("fullMenuBtn");

let index = 0;

// Custom links per drink
const menuLinks = [
    "menu.html",      // slide 1
    "menu.html",     // slide 2
    "menu.html",   // slide 3
    "menu.html"    // slide 4
];

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");

    // Update button link based on current slide
    fullMenuBtn.href = menuLinks[i];
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Arrow controls
next.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prev.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// Dot controls
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
        resetAutoSlide();
    });
});

// Auto slide every 4 seconds
let autoSlide = setInterval(nextSlide, 4000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
}

// Start with slide 0
showSlide(index);

