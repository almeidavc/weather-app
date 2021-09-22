const API_KEY = "7f25452f6b74ed11e1e1effa780583dc";

async function getWeatherData(locationName) {
  try {
    const { lat, lon } = (await fetchCoords(locationName))[0];
    return fetchWeatherData(lat, lon);
  } catch (error) {
    console.log(error);
  }
}

async function fetchCoords(locationName) {
  return fetchAndParse(
    getApiCall(
      "http://api.openweathermap.org/geo/1.0/direct",
      `q=${locationName}`
    )
  );
}

async function fetchWeatherData(lat, lon) {
  return fetchAndParse(
    getApiCall(
      "http://api.openweathermap.org/data/2.5/onecall",
      `lat=${lat}&lon=${lon}`
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
