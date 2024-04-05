/*punto1*/

let numero1=(Math.floor(Math.random()*10))
console.log(numero1)
let numero2=(Math.floor(Math.random()*10))
console.log(numero2)
let numero3=(Math.floor(Math.random()*10))
console.log(numero3)
function suma(numero1, numero2, numero3){
    let resultado=numero1+numero2+numero3;
    return (resultado);
};
console.log(suma(numero1, numero2, numero3))

/*punto2*/

function completo(nombre, apellido1, apellido2){
    return nombre +" "+ apellido1+ " "+ apellido2;
}
console.log(completo("jennifer", "diaz", "cruz"));

/*punto3*/

function getRandomNumber(num){
    return Math.random()*num;
}
function numeros(n2, n3){
    return(n2 > n3)n1:n2;
};
console.log(numeros(getRandomnumber(100,),getRandomnumber(100)));