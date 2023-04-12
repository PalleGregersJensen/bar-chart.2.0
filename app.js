"use strict";

console.log("Js kører");

window.addEventListener("load", start);

const data = [
  10, 1, 20, 30, 14, 25, 16, 7, 18, 9, 14, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 4, 15, 26, 7, 28, 29, 3, 1, 32, 5, 17, 30, 8, 21, 2, 14, 27, 9,
  22,
];

function start() {
  console.log("JS kører");
  displayAllBars();
}

function displayAllBars() {
  const bar = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const firstBar = bar[i];
    let h = (data[i] / 32) * 100;
    firstBar.style.height = `${h}px`;
  }
}

function update() {
    updateData();
    displayAllBars();
}

function updateData() {
    
}