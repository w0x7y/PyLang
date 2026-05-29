function initShopPage() {
    document.querySelector(".shop-page")?.setAttribute("data-ready", "true");
}

if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initShopPage);
} else {
    initShopPage();
}
