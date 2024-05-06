function changeImage() {
    var carta1 = document.getElementById("carta1");
    var cambiocarta = document.getElementById("cambiocarta");
    if (carta1 && cambiocarta) {
        carta1.style.display = "none";
        cambiocarta.style.display = "block";
    }
}
function restoreImage() {
    var carta1 = document.getElementById("carta1");
    var cambiocarta = document.getElementById("cambiocarta");
    if (carta1 && cambiocarta) {
        carta1.style.display = "block";
        cambiocarta.style.display = "none";
    }
}
