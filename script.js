var cityInputEl = document.querySelector("#city-entry");
var searchBtn = document.querySelector("#search");
var weatherEl = document.querySelector("#weatherboxcontainer");
var forecastEl = document.querySelector("#fivedayforecast");
var cityName = "";
var cityNameH1 = document.querySelector("#blueberry");

function getCityInfo (event) {
event.preventDefault();
var userInput = cityInputEl.value;
cityName = userInput.trim().toLowerCase();
getCurrentWeather();
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
}
  searchBtn.addEventListener("click", getCityInfo)

  
  
  