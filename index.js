const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");


if (!currentCity) {
  localStorage.setItem("city", "Craiova");
  currentCity = "Craiova";
}


currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
