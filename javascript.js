
$(document).ready(main);

function toggleMenu() {
    var nav = document.getElementById("nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}