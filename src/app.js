// Generador de cartas

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const card = {
  simbolos: ["♦", "♥", "♠", "♣"],
  cardValue: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  colorSimbolos: ["red", "black"]
};

function newCard() {
  let seleccionarSimbolo =
    card.simbolos[Math.floor(Math.random() * card.simbolos.length)];
  let seleccionarValor =
    card.cardValue[Math.floor(Math.random() * card.cardValue.length)];
  let seleccionarColor =
    card.colorSimbolos[Math.floor(Math.random() * card.colorSimbolos.length)];

  let elementos = document.getElementsByClassName("fs-1");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerText = seleccionarSimbolo;
  }
  let colores = document.getElementsByClassName("fs-1");
  for (let i = 0; i < elementos.length; i++) {
    colores[i].style.color = seleccionarColor;
  }

  document.getElementById("cardValue").innerHTML =
    "<div class='position-absolute top-50 start-50 translate-middle'><h1 class='display-1'>" +
    seleccionarValor +
    "</h1></div>";
  /*   document.getElementsByClassName("simbolo").style.color = seleccionarColor;
   */
  console.log(seleccionarSimbolo);
  console.log(seleccionarValor);
}
newCard();

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Button1").addEventListener("click", newCard);
});

/* Cronometro;
 */

let segundos = 10;
let minutos = 0;

function actualizaContador() {
  if (segundos > 0) {
    segundos--;
  } else {
    if (minutos > 0) {
      segundos = 59;
      minutos--;
    } else {
      clearInterval(cronometro);
      newCard();
      // Reinicia el temporizador
      minutos = 0;
      segundos = 10;
      cronometro = setInterval(actualizaContador, 1000);
    }
  }

  let segundosTexto = segundos < 10 ? "0" + segundos : segundos;
  let minutosTexto = minutos < 10 ? "0" + minutos : minutos;

  document.querySelector("#segundos").innerText = segundosTexto;
  document.querySelector("#minutos").innerText = minutosTexto;
}

let cronometro = setInterval(actualizaContador, 1000);

function cambiarDimensiones() {
  let ancho = document.getElementById("ancho").value;
  let alto = document.getElementById("alto").value;
  console.log(ancho);
  console.log(alto);

  let elementos = document.getElementsByClassName("paraCambiar");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.height = `${alto}px`;
    elementos[i].style.width = `${ancho}px`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("Button2")
    .addEventListener("click", cambiarDimensiones);
});
