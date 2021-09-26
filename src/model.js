import { display as displaySummary } from "./Summary";
import { display as displayExtra } from "./Extra";
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "./utils";

let weatherData;
let tempUnit = "celsius";

export function updateWeather(data) {
  weatherData = data;
  tempUnit = "celsius";
  updateViews();
}

function updateViews() {
  displaySummary(weatherData);
  displayExtra(weatherData);
}

export function toggleTempUnit() {
  if (tempUnit === "celsius") {
    convertTempUnit(convertCelsiusToFahrenheit);
    tempUnit = "fahrenheit";
  } else if (tempUnit === "fahrenheit") {
    convertTempUnit(convertFahrenheitToCelsius);
    tempUnit = "celsius";
  }
  updateViews();
}

function convertTempUnit(convertFunc) {
  weatherData.current.temp = convertFunc(weatherData.current.temp);
  weatherData.hourly.forEach((item) => {
    item.temp = convertFunc(item.temp);
  });
  weatherData.daily.forEach((item) => {
    item.temp.max = convertFunc(item.temp.max);
    item.temp.min = convertFunc(item.temp.min);
  });
}
