document.addEventListener("DOMContentLoaded", function (){
    const botonEncender = document.getElementById("botonon") as HTMLImageElement;
    const botonApagar = document.getElementById("botonoff") as HTMLImageElement;
    const luzEncendida = document.getElementById("luzon") as HTMLImageElement;
    const luzApagada = document.getElementById("luzoff") as HTMLImageElement;
    const botonToggle = document.getElementById("apagar") as HTMLInputElement;


   botonToggle.addEventListener("click", function() {

    const luzEncendidaActualmente = luzEncendida.style.display !== "none"; 
    botonEncender.style.display = luzEncendidaActualmente ? "block" : "none";
    botonApagar.style.display = luzEncendidaActualmente ? "none" : "block";
    luzEncendida.style.display = luzEncendidaActualmente ? "none" : "block";
    luzApagada.style.display = luzEncendidaActualmente ? "block" : "none";

    // Actualiza el texto del botón según el estado de la luz
    botonToggle.value = luzEncendidaActualmente ? "Encender luces" : "Apagar luces";
});
});

























)