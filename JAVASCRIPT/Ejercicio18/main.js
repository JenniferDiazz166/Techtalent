//Apartado Comer
var progressBarComer = document.getElementById("barraComer");

//Botón1- Apartadocomer
function comerHelado() {
  // Aumentar el valor en 5
  progressBarComer.value += 5;

  // Asegurarse de que el nuevo valor no supere el máximo (100)
  if (progressBarComer.value > progressBarComer.max) {
    progressBarComer.value = progressBarComer.max;
  }

  // Actualizar el texto dentro del elemento para mostrar el nuevo valor
  progressBarComer.innerHTML = progressBarComer.value + "%";
  actualizarBarraTotal()
}

//Botón2- Apartadocomer

function comerAguacate() {
  // Aumentar el valor en 10
  progressBarComer.value += 10;

  if (progressBarComer.value > progressBarComer.max) {
    progressBarComer.value = progressBarComer.max;
  }
  progressBarComer.innerHTML = progressBarComer.value + "%";
  actualizarBarraTotal()
}

//Botón3-Apartadocomer
function comerBrocoli() {
  // Aumentar el valor en 15
  progressBarComer.value += 15;

  if (progressBarComer.value > progressBarComer.max) {
    progressBarComer.value = progressBarComer.max;
  }
  progressBarComer.innerHTML = progressBarComer.value + "%";
  actualizarBarraTotal()
}

//APARTADO JUGAR

var progressBarJugar = document.getElementById("barraJugar");

//Botón1- Apartadojugar
function jugarPlay() {
  // Aumentar el valor en 5
  progressBarJugar.value += 5;

  if (progressBarJugar.value > progressBarJugar.max) {
    progressBarJugar.value = progressBarJugar.max;
  }
  progressBarJugar.innerHTML = progressBarJugar.value + "%";
  actualizarBarraTotal()
}

//Botón2- Apartadojugar

function jugarBolos() {
  // Aumentar el valor en 10
  progressBarJugar.value += 10;

  if (progressBarJugar.value > progressBarJugar.max) {
    progressBarJugar.value = progressBarJugar.max;
  }
  progressBarJugar.innerHTML = progressBarJugar.value + "%";
  actualizarBarraTotal()

}

//Botón3-Apartadojugar
function jugarTennis() {
  // Aumentar el valor en 15
  progressBarJugar.value += 15;

  if (progressBarJugar.value > progressBarJugar.max) {
    progressBarJugar.value = progressBarJugar.max;
  }
  progressBarJugar.innerHTML = progressBarJugar.value + "%";
  actualizarBarraTotal()
}

//APARTADO PELEA

var progressBarPelea = document.getElementById("barraPelea");

//Botón1-Apartadopelea

function peleaBoxeo() {
  //Aumentar el valor en 15
  progressBarPelea.value += 15;

  if (progressBarPelea.value > progressBarPelea.max) {
    progressBarPelea.value = progressBarPelea.max;
  }
  progressBarPelea.innerHTML = progressBarPelea.value + "%";
  actualizarBarraTotal()
}

//Botón2-Apartadopelea

function peleaVoltereta() {
  //Aumentar el valor en 5
  progressBarPelea.value += 5;

  if (progressBarPelea.value > progressBarPelea.max) {
    progressBarPelea.value = progressBarPelea.max;
  }
  progressBarPelea.innerHTML = progressBarPelea.value + "%";
  actualizarBarraTotal()
}

//APARTADO DORMIR

var progressBarDormir = document.getElementById("barraDormir");

//Botón1-Apartadodormir

function dormirNoche() {
  //Aumentar el valor en 15
  progressBarDormir.value += 15;

  if (progressBarDormir.value > progressBarDormir.max) {
    progressBarDormir.value = progressBarDormir.max;
  }
  progressBarDormir.innerHTML = progressBarDormir.value + "%";
  actualizarBarraTotal()
}

//Botón2-Apartadodormir

function dormirCama() {
  //Aumentar el valor en 10
  progressBarDormir.value += 10;

  if (progressBarDormir.value > progressBarDormir.max) {
    progressBarDormir.value = progressBarDormir.max;
  }
  progressBarDormir.innerHTML = progressBarDormir.value + "%";
  actualizarBarraTotal()
}

var progressBarTotal = document.getElementById("barraTotal");

function actualizarBarraTotal() {
  let mediaBarraTotal =                  //Calculamos la media
    (progressBarComer.value +
      progressBarJugar.value +
      progressBarPelea.value +
      progressBarDormir.value) /
    4;

    progressBarTotal.value += mediaBarraTotal;

  if (progressBarTotal.value >progressBarTotal .max) {
    progressBarTotal.value = progressBarTotal.max;
  }
  progressBarTotal.innerHTML = progressBarTotal.value + "%";
}