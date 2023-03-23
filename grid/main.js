const labels = [
    "Wii",
"Nintendo 3ds XL",
    "PS3",
    "Ipad",
    "Ps4",
    "PC",
];
const data = {
    labels: labels,
    datasets:[
        {
            label: "Most played consoles in hours",
           // data: [10000, 5000 , 16000,3000,35000,25000],
            backgroundColor: ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF', '#F473B9'],
        }
    ]
}
const config = {
    type: 'doughnut',
    data: data,
    maintainAspectRatio: false,
}
fetch("chart2.json")
    .then((response) => {
        return response.json();
        
    })
    .then((json) => {
        data1.datasets[0].data.push(json.data1["nintendo wii"]);
        data1.datasets[0].data.push(json.data1["Nintendo 3DS XL"]);
        data1.datasets[0].data.push(json.data1["PS3"]);
        data1.datasets[0].data.push(json.data1["Ipad"]);
        data1.datasets[0].data.push(json.data1["ps4"]);
        data1.datasets[0].data.push(json.data1["Pc"]);

            chart3.update();
        });
    
const data1 = {
    labels: labels,
    datasets: [
        {
            data:  [],
            label: "Most console played in hours",
            backgroundColor: ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF', '#F473B9'],
        }
    ]
}

const config3 = {
    type:'pie',
    data:data1,
}

const chart1 = new Chart(document.getElementById("js--chart--1"), config);
const chart3 = new Chart(document.getElementById("js--chart--3"), config3);

function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
        ghost = 0, steel = 0, water = 0, grass = 0, electric = 0, psychic = 0,
        ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
    
    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
        'ghost', 'steel', 'water', 'grass', 'electric', 'psychic',
        'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'];

    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1;
                        break;
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
                    case 'flying':
                        flying = flying + 1;
                        break;
                    case 'poison':
                        poison = poison + 1;
                        break;
                    case 'ground':
                        ground = ground + 1;
                        break;
                    case 'rock':
                        rock = rock + 1;
                        break;
                    case 'bug':
                        bug = bug + 1;
                        break;
                    case 'ghost':
                        ghost = ghost + 1;
                        break;
                    case 'steel':
                        steel = steel + 1;
                        break;
                    case 'water':
                        water = water + 1;
                        break;
                    case 'grass':
                        grass = grass + 1;
                        break;
                    case 'electric':
                        electric = electric + 1;
                        break;
                    case 'psychic':
                        psychic = psychic + 1;
                        break;
                    case 'ice':
                        ice = ice + 1;
                        break;
                    case 'dragon':
                        dragon = dragon + 1;
                        break;
                    case 'dark':
                        dark = dark + 1;
                        break;
                    case 'fairy':
                        fairy = fairy + 1;
                        break;
                    case 'unknown':
                        unknown = unknown + 1;
                        break;
                    case 'shadow':
                        shadow = shadow + 1;
                        break;
                }
            }).then(function () {
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug,
                    ghost, steel, water, grass, electric, psychic,
                    ice, dragon, dark, fairy, unknown, shadow];
                graph.update();
            });
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "pokemon types",
                data: [normal, fighting, flying, poison, ground, rock, bug,
                    ghost, steel, water, grass, electric, psychic,
                    ice, dragon, dark, fairy, unknown, shadow],
                backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B9'],
            }
        ]
    }

    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    }

    const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);
}


getPokemon();


Date.UTC()



function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i}; //add zero in front of numbers < 10
    return i;
}


let today = new Date().toISOString().slice(0, 10);


let datum1;
const URL= '/grid/chart1.json';
console.log(chart1.json)
fetch(URL)
    .then(response => response.json())
    .then(consoletijd => {
        data.datasets[0].data.push(consoletijd.Data['Wii']);
            data.datasets[0].data.push(consoletijd.Data['Nintendo 3ds XL']);
        data.datasets[0].data.push(consoletijd.Data['ps3']);
            data.datasets[0].data.push(consoletijd.Data['ps4']);
        data.datasets[0].data.push(consoletijd.Data['Ipad']);
        data.datasets[0].data.push(consoletijd.Data['Pc']);
        console.log(data.datasets[0].data)
        console.log(data.datasets[0].data)
        chart1.update();
    });

    const startButton = document.getElementById("js--start");
    const stopButton = document.getElementById("js--stop");
    const resetButton = document.getElementById("js--reset");
    let seconds = 0;
    let minutes = 0;
    let running = false; /* standaard telt het nog niet */
    
    const secondsTimer = document.getElementById("js--secondsTimer");
    const minutesTimer = document.getElementById("js--minutesTimer");
    
    let timer;
    
    startButton.onclick = function () {
        if (running === true) { /* stopwatch al loopt dan mag je niks doen*/
            return;
        }
        running = true;
        timer = setInterval(function () {
            seconds = seconds + 1;
            if (seconds === 60) {
                minutes = minutes + 1;
                minutesTimer.innerText = minutes;
                seconds = 0;
            }
            secondsTimer.innerText = seconds; /* dit laat die zien in de html */
        }, 100); /* dit is in miliseconden, 1000 ms is 1 seconden*/
    }
    
    stopButton.onclick = function () {
        clearInterval(timer);
        running = false;
    }
    
    resetButton.onclick = function () {
        seconds = 0;
        minutes = 0;
        clearInterval(timer);
        running = false
        secondsTimer.innerText = 0;
        minutesTimer.innerText = 0;
    }