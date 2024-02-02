window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";
// Note: function og => kan være det samme i nogle sammenhænge

function init() {
  console.log("init");

  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showBeers(json);
    });
}

function showBeers(beerJSON) {
  console.log("json", beerJSON);
  console.log("første json element", beerJSON[0]);
}
