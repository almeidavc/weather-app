import { setTemp } from "./utils";

const sumLocation = document.querySelector(".sum__location");
const sumDescription = document.querySelector(".sum__description");
const sumTempNow = document.querySelector(".sum__temp-now");
const sumTempMax = document.querySelector(".sum__temp-max");
const sumTempMin = document.querySelector(".sum__temp-min");

export default class Summary {
  static display(weatherData) {
    sumLocation.textContent = weatherData.location;
    sumDescription.textContent = weatherData.current.description;
    setTemp(sumTempNow, weatherData.current.temp);
    setTemp(sumTempMax, weatherData.daily[0].temp.max, "H:");
    setTemp(sumTempMin, weatherData.daily[0].temp.min, "L:");
  }
}
