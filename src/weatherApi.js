const API_KEY = "7f25452f6b74ed11e1e1effa780583dc";

async function getWeatherData(locationName) {
  try {
    const { name: location, lat, lon } = (await fetchCoords(locationName))[0];
    return filterWeatherData(
      location,
      await fetchWeatherData(lat, lon, "metric")
    );
  } catch (error) {
    console.log(error);
  }
}

function filterWeatherData(location, weatherData) {
  return {
    location,
    tempNow: weatherData.current.temp,
    tempMax: weatherData.daily[0].temp.max,
    tempMin: weatherData.daily[0].temp.min,
    description: weatherData.current.weather[0].description,
  };
}

async function fetchCoords(locationName) {
  return fetchAndParse(
    getApiCall(
      "http://api.openweathermap.org/geo/1.0/direct",
      `q=${locationName}`
    )
  );
}

async function fetchWeatherData(lat, lon, units) {
  return fetchAndParse(
    getApiCall(
      "http://api.openweathermap.org/data/2.5/onecall",
      `lat=${lat}&lon=${lon}&units=${units}`
    )
  );
}

async function fetchAndParse(apiCallUrl) {
  try {
    const response = await fetch(apiCallUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function getApiCall(apiUrl, queryString) {
  return `${apiUrl}?appid=${API_KEY}${queryString ? `&${queryString}` : ""}`;
}

export { getWeatherData };
