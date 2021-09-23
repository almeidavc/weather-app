import "regenerator-runtime/runtime";
import summary from "./summary";
import { getWeatherData } from "./weatherApi";

async function loadWeatherInfo(location) {
  summary.display(await getWeatherData(location));
}

loadWeatherInfo("london");
