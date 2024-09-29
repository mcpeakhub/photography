var menu = document.getElementById("mobile-navbar");
menu.style.display = "none"

function toggleMobileNavbar() {
    var menu = document.getElementById("mobile-navbar");
    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}