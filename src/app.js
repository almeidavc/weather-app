import { getWeather } from "./weatherData";
import Summary from "./Summary";
import Forecast from "./Forecast";

function start() {
  loadWeatherInfo("london");
}

async function loadWeatherInfo(location) {
  const weatherData = await getWeather(location);
  Summary.display(weatherData);
  Forecast.displayHourly(weatherData);
}

export default { start };
