window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
});