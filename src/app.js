import { getWeather } from "./weatherData";
import { updateWeather } from "./model";
import { setup as setupTopbar } from "./topbar";
import { setup as setupExtra } from "./Extra";
import { startLoadingAnimation, stopLoadingAnimation } from "./loading";

export function start() {
  setupTopbar();
  setupExtra();
  loadWeather("porto");
}

export async function loadWeather(location) {
  startLoadingAnimation();
  updateWeather(await getWeather(location));
  stopLoadingAnimation();
}
