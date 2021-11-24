function displayWeatherForecast(city) {

  const forecastEndpoint = getForecastEndpoint(city);

  let weatherForecastContainer = document.querySelector(".weather-forecast");
  weatherForecastContainer.innerHTML = "";

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { list } = data;
      const daysMap = {};

   
      list.forEach((element) => {
        const { dt } = element;
        const day = getDayOfTheWeek(dt);
        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });

      for (key in daysMap) {
        weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;
        days = daysMap[key];
        days.forEach((element) => {
          const { dt, main, weather } = element;
          const hour = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          weatherForecastContainer.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>${hour}</div>
              <div><img src="${weatherIcon}" alt="" /></div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div>${weatherDescription}</div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
        });
      }
    });
}
