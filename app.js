"use strict"

console.log("Js kører");

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    const bar = document.querySelectorAll(".bar");
    const firstBar = bar[0];

    let h = 10;

    firstBar.style.height = `${h}px`;
}