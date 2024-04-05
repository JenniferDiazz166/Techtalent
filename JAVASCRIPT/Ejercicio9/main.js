/*parte1*/
const parrafo="javascript es curioso";
console.log(parrafo.replace("a","o"));
const cambio= /a/i;
console.log(parrafo.replace(cambio,"o"));

/*parte2*/

function empezarAca (aca){
    return aca.toLowerCase().startsWith("aca");
}
console.log(empezarAca("Escuela")); //true
console.log(empezarAca("Acaso")); //false
console.log(empezarAca("Acampamento")) //true
console.log(empezarAca("jenny")); //false

/*parte3*/
function saludar (hola){
    console.log(hola.repeat(3));  
}
saludar("hola ");