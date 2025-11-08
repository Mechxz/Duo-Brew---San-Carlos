// loading animation handler
const loader = document.getElementById("loader");
const loadingContainer = document.querySelector(".loading-container");
const homepage = document.getElementById("homepage");

loader.addEventListener("animationend", (e) => {
  if (e.animationName === "fadeOut") { // hihintayin niyang matapos 'yung fadeOut animation
    loadingContainer.style.display = "none";
    homepage.classList.add("show");
  }
});

// random hero image selector
const hero = document.getElementById('hero');
const images = [
  'coffee1.jpg',
  'coffee2.jpg',
  'coffee3.jpg'
];

const randomImage = images[Math.floor(Math.random() * images.length)];
hero.style.backgroundImage = `url(${randomImage})`;
