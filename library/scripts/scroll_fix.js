if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView();
    } else {
        window.scrollTo(0, 0);
    }
});