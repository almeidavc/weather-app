import { getWeather } from "./weatherData";
import { updateWeather } from "./model";
import { setup as setupTopbar } from "./topbar";
import { setup as setupExtra } from "./Extra";

export function start() {
  setupTopbar();
  setupExtra();
  loadWeather("porto");
}

export async function loadWeather(location) {
  updateWeather(await getWeather(location));
}
