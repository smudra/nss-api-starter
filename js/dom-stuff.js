// "use strict";

// function showPlanets(planetArray) {
//     console.log("show me some planets", planetArray);
// }

// module.exports = { showPlanets };


"use strict";

// function showPlanets(planetArray) {
//    console.log("show me some planets", planetArray);
// }

function populatePage(item, index) {
   //make a div to put the rendered html
   let newDiv = document.createElement("div");
   newDiv.innerHTML = itemGrid(item, index);
   document.getElementById("container").append(newDiv);
}

function showFilmList(val) {
   let output = `<li><a href="${val}">${val}</a></li>`;
   return output;
}

function itemGrid(item, index) {
   console.log("itemGrid");
   let filmArray = item.films;
   let filmList;

   // ? is ternary operator. Under (filmList) variable first show filmList + showFilmList(item) if (filmList) is true. Since there is nothing in the variable it is false. If it is false run showFilmList(item) the second one.

   filmArray.forEach((item) => {
      filmList = (filmList) ? filmList + showFilmList(item) : showFilmList(item);
   });

   let output =
      `<section id="index--${index}" class="card-wrapper" style="border: 2px solid">
      <h3>Name: ${item.name}</h3>
      <h4>Planet featured in these films:</h4>
      <ul>
      ${filmList}
      </ul>
      <span><strong>Planet Terrain:</strong> ${item.terrain}</span>
      </section>`;
   return output;
}

module.exports = { populatePage };