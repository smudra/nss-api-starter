"use strict";

console.log("Main is in the house");

let db = require('./fetch-sw');

let button = document.getElementById("btn-planets");
button.addEventListener("click", db.api_calls.getAllPlanets);
