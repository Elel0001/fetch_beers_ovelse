window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";
// Note: function og => kan være det samme i nogle sammenhænge

let beerTemplate;
let beerContainer;

function init() {
  console.log("init");

  beerTemplate = document.querySelector(".beer_template");
  console.log("beerTemplate", beerTemplate);

  beerContainer = document.querySelector(".beer_container");
  console.log("beer_container", beerContainer);

  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showBeers(json);
    });
}

function showBeers(beerJSON) {
  let beerClone;

  beerJSON.forEach((beer) => {
    console.log("beer", beer);
    beerClone = beerTemplate.cloneNode(true).content;
    beerClone.querySelector(".beer_image").src = beer.image_url;
    beerClone.querySelector(".beer_image").alt = `Picture of a ${beer.name} beer`;
    beerClone.querySelector(".beer_name").textContent = beer.name;
    beerClone.querySelector(".beer_tagline").textContent = beer.tagline;
    beerClone.querySelector(".beer_description").textContent = beer.description;
    beerContainer.appendChild(beerClone);
  });
}
