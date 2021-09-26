import { getTempFormatted } from "./utils";

const sumLocation = document.querySelector(".sum__location");
const sumDescription = document.querySelector(".sum__description");
const sumTempNow = document.querySelector(".sum__temp-now");
const sumTempMax = document.querySelector(".sum__temp-max");
const sumTempMin = document.querySelector(".sum__temp-min");

export function display(weatherData) {
  sumLocation.textContent = weatherData.location;
  sumDescription.textContent = weatherData.current.description;
  displayTemps(weatherData);
}

function displayTemps(weatherData) {
  sumTempNow.textContent = getTempFormatted(weatherData.current.temp);
  sumTempMax.textContent = getTempFormatted(
    weatherData.daily[0].temp.max,
    "H:"
  );
  sumTempMin.textContent = getTempFormatted(
    weatherData.daily[0].temp.min,
    "L:"
  );
}
