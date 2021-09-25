import { getWeather } from "./weatherData";
import * as Summary from "./Summary";
import * as Extra from "./Extra";

const topbarSearchButton = document.querySelector(".topbar__search > button");
const topbarSearchInput = document.querySelector(".topbar__search > input");

function start() {
  loadWeatherInfo("porto");
}

async function loadWeatherInfo(location) {
  const weatherData = await getWeather(location);
  Summary.display(weatherData);
  Extra.setup(weatherData);
}

async function updateWeatherInfo(location) {
  const weatherData = await getWeather(location);
  Summary.display(weatherData);
  Extra.update(weatherData);
}

topbarSearchButton.addEventListener("click", () => {
  updateWeatherInfo(topbarSearchInput.value);
});

export default { start };
