"use strict"

console.log("Js kører");

window.addEventListener("load", start);

const data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 5, 17, 30, 8, 21, 2, 14, 27, 9,
  22];

function start() {
    console.log("JS kører");
    const bar = document.querySelectorAll(".bar");
    const firstBar = bar[0];

    let h = data[0]/ 32* 100;

    firstBar.style.height = `${h}px`;
}