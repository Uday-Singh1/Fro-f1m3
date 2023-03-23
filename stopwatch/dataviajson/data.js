const pokemonImage = document.getElementById("js--pokemon--image");
const adventure = document.getElementById("js--adventure--text");
const search = document.getElementById("js--search--text");
let randomNumber = Math.floor(Math.random() * 250 + 1); //1...250




let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
  .then(function (response) {
    return response.json();
  })
  .then(function (realData) {
    pokemonImage.src = realData.sprites.front_default;
  });

const catchButton = document.getElementById("js--catch--button");
const pokemonText = document.getElementById("js--pokemon-text")
let pokemonGamePlayed = false;

catchButton.onclick = function () {
  if (pokemonGamePlayed === false) {
    let catchNumber = Math.floor(Math.random() * 2); // 0 - 2  
    if (catchNumber === 0) {
      pokemonText.innerText = "Pokemon Fled!"
    }
    else {
      pokemonText.innerText = "Pokemon Caught!"

    }
    pokemonGamePlayed = true;

  }
}

let Adventure = fetch("https://api.tvmaze.com/search/shows?q=adventure%20time")
  .then(function (response) {
    return response.json();
  })
  .then(function (show) {
   
    adventure.innerHTML = show[0].show.summary
  });
  const nameText = document.getElementById("js--name");
let inputfield = document.getElementById("textvak");


inputfield.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let name = inputfield.value;
      /* api call naar age predictor */
    let age = fetch("https://api.agify.io?name=" +name)
      .then(function (response) {
        return response.json();
      })
      .then(function (echteData) {
        inputfield.style.display = "none"
        nameText.innerText = echteData.age;
      })
      
      }
}
