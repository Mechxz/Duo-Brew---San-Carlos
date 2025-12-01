// CATEGORY CLICK → scroll to section
document.querySelectorAll("#categoryList li").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("#categoryList li.active").classList.remove("active");
        btn.classList.add("active");

        const target = document.getElementById(btn.dataset.target);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// HIGHLIGHT CATEGORY WHEN SCROLLING
const sections = document.querySelectorAll(".category-section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = sec.offsetTop - 300;
        if (scrollY >= top) current = sec.id;
    });

    document.querySelectorAll("#categoryList li").forEach(li => {
        li.classList.toggle("active", li.dataset.target === current);
    });
});

// SEE FULL MENU → EXPAND ROWS
document.querySelectorAll(".see-full").forEach(btn => {
    btn.addEventListener("click", () => {
        const row = btn.parentElement.nextElementSibling;

        if (row.style.flexWrap === "wrap") {
            row.style.flexWrap = "nowrap";
            btn.textContent = "See Full Menu";
        } else {
            row.style.flexWrap = "wrap";
            row.style.gap = "15px";
            btn.textContent = "Hide";
        }
    });
});
