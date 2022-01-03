let city;
var apiKey = "ec104f2f80e34aa355099c98f2584fe7";
var date = moment().format("(M/D/YY)")

let citySaved =  JSON.parse(localStorage.getItem("cities"));

// check if data is in local storage 
function loStore() {
    if (JSON.parse(localStorage.getItem("cities")) == null) {
        let citySavedLoc = [];
        window.citySaved = citySavedLoc;
        return citySaved;
    }
    else {
        var citySavedLoc = JSON.parse(localStorage.getItem("cities"));
        window.citySaved = citySavedLoc;
        return citySaved;
    }
}

var cityInputEl = document.querySelector("#city-entry");
var searchBtn = document.querySelector("#search");
var weatherEl = document.querySelector("#weatherboxcontainer");
var forecastEl = document.querySelector("#fivedayforecast");
var cityName = "";
var cityNameH1 = document.querySelector("#blueberry");
var cityLat;
var cityLon;

function getCityInfo (event) {
event.preventDefault();
var userInput = cityInputEl.value;
cityName = userInput.trim().toLowerCase();
getCurrentWeather()
;
}

function getCurrentWeather () {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ec104f2f80e34aa355099c98f2584fe7`)
    .then(response => response.json())
    .then(data => renderCurrentWeather(data));
}

function renderCurrentWeather(data) {
console.log(data);
 //cityNameH1.textContent = data.city.name;
 var h1 = document.createElement("h1");
 h1.textContent = data.city.name;
 weatherEl.appendChild(h1);
 var h2 = document.createElement("h2");
 h2.textContent = data.city.timezone;
 weatherEl.appendChild(h2);
 cityLat = data.city.coord.lat
 cityLon = data.city.coord.lon
 console.log(cityLat + ':' + cityLon)
 getFiveDayForecast(cityLat, cityLon)
}

function getFiveDayForecast (lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=ec104f2f80e34aa355099c98f2584fe7&units=imperial`)
    .then(response => response.json())
    .then(data => console.log(data));
    ;
}


  searchBtn.addEventListener("click", getCityInfo)


  
  
  