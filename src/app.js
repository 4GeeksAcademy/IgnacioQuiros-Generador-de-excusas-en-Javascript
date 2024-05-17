/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//Defino las variables que voy a necesitar al inicio del documento
let finalArray = [];
let matrizArrays = [[who], [action], [what], [when]];
let temporalArray = [];
let randomNumber = 0;

//Defino tambien las variables del boton y le añado un "EventListener"
const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

//Llamando a la funcion de generar excusas una vez carge la ventana
window.onload = function() {
  generadorDeExcusas();
};

//Funcion que genera excusas
function generadorDeExcusas() {
  //Importante vaciarlo para que se pueda renovar la excusa al clicar en el boton
  finalArray = [];

  //Aqui pasa la magia
  for (let index = 0; index < matrizArrays.length; index++) {
    if (index === 0) {
      randomNumber = Math.floor(Math.random() * 4);
      temporalArray = matrizArrays[index];
      finalArray.push(temporalArray[0][randomNumber]);
    } else if (index === 1) {
      randomNumber = Math.floor(Math.random() * 4);
      temporalArray = matrizArrays[index];
      finalArray.push(temporalArray[0][randomNumber]);
    } else if (index === 2) {
      temporalArray = matrizArrays[2];
      randomNumber = Math.floor(Math.random() * 3);
      finalArray.push(temporalArray[0][randomNumber]);
    } else if (index === 3) {
      randomNumber = Math.floor(Math.random() * 5);
      temporalArray = matrizArrays[index];
      finalArray.push(temporalArray[0][randomNumber]);
    }
  }

  //Aqui mandando al html que de base el div de "excusa" estará vacio
  document.getElementById("excuse").innerHTML = "<p>  <br> </p>";
}

//Funcion para que funcione el botón y al clicar genere una nueva excusa
function onButtonClick() {
  //Llamo a la funcion que generará la excusa antes de enviar nada
  generadorDeExcusas();
  //Lo mando a Html en forma de Párrafo para luego poder modificar en style el "p"
  document.getElementById("excuse").innerHTML =
    "<p>" +
    finalArray[0] +
    " " +
    finalArray[1] +
    " " +
    finalArray[2] +
    " " +
    finalArray[3] +
    "</p>";
}
