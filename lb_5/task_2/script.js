document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'b4e4170f0f744542835182347242811'; // Замените на ваш API ключ
    const city = 'Moscow';
  
    // Функция для получения данных о погоде
    async function getWeather() {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&lang=ru`);
      const data = await response.json();
  
      if (data) {
        const location = data.location.name;
        const currentTemperature = data.current.temp_c;
        const currentCondition = data.current.condition.text;
        const currentIcon = `https:${data.current.condition.icon}`;
  
        // Отображение текущей погоды
        document.getElementById('current-location').innerHTML = `Город: ${location}`;
        document.getElementById('current-weather').innerHTML = `
          <img src="${currentIcon}" alt="${currentCondition}">
          <div class="temperature">${currentTemperature}°C</div>
          <div class="condition">${currentCondition}</div>
        `;
  
        // Отображение прогноза на несколько дней
        const forecast = data.forecast.forecastday;
        let forecastHTML = '';
        forecast.forEach(day => {
          const date = new Date(day.date).toLocaleDateString();
          const temperature = `${day.day.avgtemp_c}°C`;
          const condition = day.day.condition.text;
          const icon = `https:${day.day.condition.icon}`;
  
          forecastHTML += `
            <div class="forecast-card">
              <img src="${icon}" alt="${condition}">
              <div class="date">${date}</div>
              <div class="temperature">${temperature}</div>
              <div class="condition">${condition}</div>
            </div>
          `;
        });
  
        document.getElementById('forecast-container').innerHTML = forecastHTML;
  
        // Определение фона в зависимости от погоды
        const currentWeatherCode = data.current.condition.code;
        if (currentWeatherCode === 1000) {
          document.body.className = 'sunny';
        } else if (currentWeatherCode === 1003 || currentWeatherCode === 1006) {
          document.body.className = 'cloudy';
        } else if (currentWeatherCode === 1183 || currentWeatherCode === 1186 || currentWeatherCode === 1203) {
          document.body.className = 'rainy';
        } else if (currentWeatherCode === 1210 || currentWeatherCode === 1213) {
          document.body.className = 'snowy';
        } else {
          document.body.className = ''; // По умолчанию без фона
        }
      }
    }
  
    // Получить погоду при загрузке страницы
    getWeather();
  });
  