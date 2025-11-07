const loader = document.getElementById("loader");
const loadingContainer = document.querySelector(".loading-container");
const homepage = document.getElementById("homepage");

loader.addEventListener("animationend", (e) => {
  if (e.animationName === "fadeOut") { // hihintayin niyang matapos 'yung fadeOut animation
    loadingContainer.style.display = "none";
    homepage.classList.add("show");
  }
});
