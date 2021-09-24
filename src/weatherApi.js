const API_KEY = "7f25452f6b74ed11e1e1effa780583dc";

const weatherIconsIDs = [
  "01d",
  "01n",
  "02d",
  "02n",
  "03d",
  "03n",
  "04d",
  "04n",
  "09d",
  "09n",
  "10d",
  "10n",
  "11d",
  "11n",
  "13d",
  "13n",
  "50d",
  "50n",
];

async function fetchWeatherData(lat, lon, units) {
  return fetchAndParseAsJSON(
    getApiCall(
      "http://api.openweathermap.org/data/2.5/onecall",
      `lat=${lat}&lon=${lon}&units=${units}`
    )
  );
}

async function fetchCoords(locationName) {
  return fetchAndParseAsJSON(
    getApiCall(
      "http://api.openweathermap.org/geo/1.0/direct",
      `q=${locationName}`
    )
  );
}

async function fetchWeatherIcons() {
  return Promise.all(weatherIconsIDs.map(fetchWeatherIcon));
}

async function fetchWeatherIcon(iconID) {
  const response = await fetch(
    `http://openweathermap.org/img/wn/${iconID}.png`
  );

  return {
    id: iconID,
    url: URL.createObjectURL(await response.blob()),
  };
}

async function fetchAndParseAsJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function getApiCall(apiUrl, queryString) {
  return `${apiUrl}?appid=${API_KEY}${queryString ? `&${queryString}` : ""}`;
}

export { fetchWeatherData, fetchCoords, fetchWeatherIcons };
