let nombre;
nombre='Jennifer'; /*Iniciación de un valor*/🪻
console.log (nombre);
console.log (typeof(nombre));
let edad;
edad=23;
console.log(edad);
console.log(typeof(edad));
let booleano= false;
console.log ('false');
console.log(typeof booleano);
let dni= null;
console.log(typeof dni);
let altura=undefined;
console.log(typeof altura);

//sirve para demostración de que no son iguales//🫧
const value1= Symbol("hello");
const value2= Symbol("hello");
console.log(value1==value2); //false
console.log (value1.description== value2.description); //true
//Y demuestra dos resultados//

const valor1=Symbol('Nennu');
console.log(value1);
console.log(typeof value1);

const object={nombre: 'Jennifer', apellido:'diaz cruz'};
console.log (object);
console.log(typeof object);

//Para hacer tabla//🐸
const object1={nombre: 'Jennifer', apellido:'diaz cruz', dni: '39928174J'};
console.table(object1);
console.log(typeof object1);
//Para hacer tabla//

const array= [11 , 2000 , 16]
console.log(array);
console.log(array[2]);
console.log(array[0]);
console.log(array[1]);
console.log (typeof array);

/*siempre se empieza por 0, hasta el número que quiera*/

//global//🍄

const nennumoon=function(){
    console.log('nennu');
    console.log(typeof nennumoon); 
}
nennumoon();

//global

/*local*/ 🐼
const saludar="hola";
if(false){
    let edad=23;
}
/*local*


