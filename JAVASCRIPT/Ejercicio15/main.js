//1er paso- Creo una Función para la Jugada Aleatoria
function obtenerJuego(){
    const opciones=["piedra", "papel", "tijera"];
    return opciones [Math.floor(Math.random() * opciones.length)];
}

//2do paso- Creo otra función para hacer que funcione la ronda del juego
function jugar (opcionJugador){
    const opcionJuego = obtenerjuego();
    document.write("<h2>¡Piedra, papel, tijera!</h2>");
    document.write ("<h3>Tu elección: "+ opcionJugador + "</h3>");
    document.write("<p>Juego eligió:" + opcionJuego + "</p>"); 

//3er paso- Se muestran los iconos a través del Switch Case
document.write("<p> Tu elección: ");
    switch (opcionJugador){
        case "piedra":
            document.write("✊");
            break;

        case "papel":
            document.write("✋");
            break;  

        case "tijera":
            document.write("✌️");
            break; 
        default:
            document.write("❓");        

    }
    document.write ("</p>");
    
    document.write("<p> Juego eligió: ");
        switch (opcionJuego){
        case "piedra":
            document.write("✊");
            break;

        case "papel":
            document.write("✋");
            break;  

        case "tijera":
            document.write("✌️");
            break; 
        default:
            document.write("❓");        

    }
    document.write("</p>");

    //Se determina el gaandor
    if (opcionJugador === opcionJuego) {
        document.write("<h3>¡Empate!</h3>");
    } else if ((opcionJugador === "piedra" && opcionJuego === "tijera") ||
        (opcionJugador === "papel" && opcionJuego === "piedra") ||
        (opcionJugador === "tijera" && opcionJuego === "papel")) {
        document.write("<h3>¡ Has ganado!</h3>");
    } 
    else {
        document.write("<h3>¡Juego gana!</h3>");
    }

}
//Jugar la ronda
jugar("papel");
