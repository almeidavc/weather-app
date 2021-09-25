import { getWeather } from "./weatherData";
import Summary from "./Summary";
import Extra from "./Extra";

function start() {
  loadWeatherInfo("porto");
}

async function loadWeatherInfo(location) {
  const weatherData = await getWeather(location);
  Summary.display(weatherData);
  Extra.setup(weatherData);
}

const topbarSearchButton = document.querySelector(".topbar__search > button");
const topbarSearchInput = document.querySelector(".topbar__search > input");

topbarSearchButton.addEventListener("click", async () => {
  const weatherData = await getWeather(topbarSearchInput.value);
  Summary.display(weatherData);
  Extra.update(weatherData);
});

export default { start };
