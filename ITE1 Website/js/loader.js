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


