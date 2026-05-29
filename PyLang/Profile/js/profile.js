function initProfilePage() {
    document.querySelector(".profile-page")?.setAttribute("data-ready", "true");
}

if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initProfilePage);
} else {
    initProfilePage();
}
