/* deze variabelen daar kan elke functie bij want ze zijn globaal gedecladeerd */
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

/* hier begint de slider */
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = 2;
rangeValue.innerText = slider.value + "x";


slider.oninput = function () {
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}



const paragraph = document.getElementById("js--text");

const img = document.getElementById("js--image");
//data ophalen
let data = fetch("data.json").then(
    function (binnengekomendata){
        return binnengekomendata.json();
        console.log(binnengekomend)
    }).then(
        function (echtedata) {
            console.log(echtedata);
            paragraph.innerHTML = echtedata.text;
            img.src = echtedata.image;
        }
    );



