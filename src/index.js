import "regenerator-runtime/runtime";
import { getWeather } from "./weatherData";
import Summary from "./Summary";
import Forecast from "./Forecast";

async function loadWeatherInfo(location) {
  const weatherData = await getWeather(location);
  Summary.display(weatherData);
  Forecast.displayHourly(weatherData);
}

loadWeatherInfo("london");
