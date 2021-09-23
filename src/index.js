import "regenerator-runtime/runtime";
import { getWeatherData } from "./weatherApi";

const sumLocation = document.querySelector(".sum__location");
const sumDescription = document.querySelector(".sum__description");
const sumTempNow = document.querySelector(".sum__temp-now");
const sumTempMax = document.querySelector(".sum__temp-max");
const sumTempMin = document.querySelector(".sum__temp-min");

async function loadWeatherInfo(location) {
  displayWeatherInfo(await getWeatherData(location));
}

function displayWeatherInfo(weatherData) {
  sumLocation.textContent = weatherData.location;
  sumDescription.textContent = weatherData.description;
  setTemp(sumTempNow, weatherData.tempNow);
  setTemp(sumTempMax, weatherData.tempMax, "H:");
  setTemp(sumTempMin, weatherData.tempMin, "L:");
}

function setTemp(element, temp, prefix) {
  element.textContent = `${prefix ? prefix : ""}${temp}°`;
}

loadWeatherInfo("london");
