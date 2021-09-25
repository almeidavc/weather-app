import { getWeather } from "./weatherData";
import Summary from "./Summary";
import Extra from "./Extra";

function start() {
  loadWeatherInfo("london");
}

async function loadWeatherInfo(location) {
  const weatherData = await getWeather(location);
  Summary.display(weatherData);
  Extra.display(weatherData);
}

export default { start };
