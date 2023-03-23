const pokemonImage = document.getElementById('js--pokemon-image');
let randomNumber = Math.floor(Math.random() * 250 + 1);


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
    });


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");

let = pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed == false) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Pokemon Fled!"
        }
        else {
            pokemonText.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true;
    }
}


const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        /* Api call naar agify */
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                inputField.style.display = "none";
                nameText.innerText = jsonData.age;
            });
    }
}
//tv show
const tvName = document.getElementById("js--tvTitle");
const tvDes = document.getElementById("js--tvDes");
let tvShow = fetch("https://api.tvmaze.com/episodes/2494392")
.then(function (response) {
    return response.json();
})
    .then(function (jsonDatatv) {
        console.log(jsonDatatv);
        tvName.innerText = jsonDatatv.name;
        tvDes.innerHTML = jsonDatatv.summary;
    });