"use strict";

// Read this file. 


let dom = require("./dom-stuff");

// put objects in one place
let api_calls = {};
let base = "https://swapi.co/api";
let planets = [];

api_calls.getAllPlanets = () => {
    console.log("happy to get all planets");

    let planetXHR = new XMLHttpRequest();

    planetXHR.addEventListener("load", function(){
        let data = JSON.parse(this.responseText);
        console.log ("data in call", data);
        planets = data.results;

        //show the planets

        //dom.showPlanets(planets);
        planets.map(dom.populatePage); // array method
    });

    // setter
    planetXHR.addEventListener("error", function(){
        console.log("you have an error with the XHR call - check spelling");
    });


    // getter
    planetXHR.open("GET", `${base}/planets`);
    planetXHR.send();

};

api_calls.getPlanets = () => {
    return planets;
};

module.exports = { api_calls };