/*parte1*/

const arr= ["🍔","🌮","🥖","🍕","🍜","🫕","🍙","🍘","🥑"];
console.log(arr.fill("🍺",4,arr.length));
console.log(arr.length);

/*parte2*/

const array= ["🍕","🍕","🍍","🍕","🍕",];
let stock= 2;
arr.find(item=> {
    if (item== "🍍") {
      stock++;

    };
});
if (stock !=0){console.log("he encontrado piña" + stock + "🍍 en el ejercicio");}

/*parte3*/

const piña=["🍕","🍕","🍍","🍕","🍕"];
piña.splice(2,1);
console.log(piña);

/*parte4*/
const frutas=["🍓","🍋","🍓","🍋","🍓"];
for (var i= 0; i <frutas.length; i++){
  if (frutas [i]=== "🍓"){
    frutas[i]="🍄";
  }
}
console.log(frutas);

/*parte5*/
let ingredientes= ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
let nuevaLista=[];
ingredientes.forEach(ingrediente => {
  nuevaLista.push(ingrediente);
  if (ingrediente=== "🌶️"){
    nuevaLista.push("🥵");
  }
});
console.log(nuevaLista);

/*parte6*/
const cartas= ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let newList=[];
cartas.forEach(carta => {
  newList.push(carta);
  if (carta=== "🎴"){
    newList.push("🃏");
  }
});
console.log(newList);

