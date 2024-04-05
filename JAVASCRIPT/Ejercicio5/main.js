function tirarMoneda() {

    let randomnumber = Math.random();

    if (randomnumber < 0.5) {
        return "cara";
    } else {
        return "cruz";
    }

    // return randomnumber < 0.5 ? "cara" : "cruz";
}
//console.log("resultado del lanzamiento", tirarMoneda());

//otra opción//

let resultado;
let numeroAleatorio = Math.random();

if (numeroAleatorio < 0.5) {
    resultado = "cara";

} else {

    resultado = "cruz";
}
console.log(resultado);

