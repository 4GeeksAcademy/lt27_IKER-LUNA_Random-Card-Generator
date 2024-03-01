/* eslint-disable */
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

  let elementos = document.getElementsByClassName("simbolo");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerText = seleccionarSimbolo;
  }
  let colores = document.getElementsByClassName("simbolo");
  for (let i = 0; i < elementos.length; i++) {
    colores[i].style.color = seleccionarColor;
  }

  document.getElementById("cardValue").innerText = seleccionarValor;
  /*   document.getElementsByClassName("simbolo").style.color = seleccionarColor;
   */
  console.log(seleccionarSimbolo);
  console.log(seleccionarValor);
}
newCard();

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Button1").addEventListener("click", newCard);
});
