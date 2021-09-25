import { HourlyForecast, DailyForecast } from "./Forecast";

const hourlyButton = document.querySelector(".hourly__button");
const dailyButton = document.querySelector(".daily__button");
const hourlyContainer = document.querySelector(".hourly");
const dailyContainer = document.querySelector(".daily");
const buttonsBar = document.querySelector(".buttons__bottom-bar");

let hourlyForecast;
let dailyForecast;
let active;

export function setup(weatherData) {
  setupButtons();
  setupForecasts(weatherData);
  displayHourlyForecast();
}

export function update(weatherData) {
  setupForecasts(weatherData);
  if (active === "hourly") {
    displayHourlyForecast();
  } else {
    displayDailyForecast();
  }
}

function setupForecasts(weatherData) {
  hourlyForecast = new HourlyForecast(weatherData.hourly, hourlyContainer);
  dailyForecast = new DailyForecast(weatherData.daily, dailyContainer);
  hourlyForecast.load();
  dailyForecast.load();
}

function setupButtons() {
  hourlyButton.addEventListener("click", displayHourlyForecast);
  dailyButton.addEventListener("click", displayDailyForecast);
}

function displayHourlyForecast() {
  dailyForecast.hide();
  hourlyForecast.display();
  highlightHourlyButton();
  active = "hourly";
}

function displayDailyForecast() {
  hourlyForecast.hide();
  dailyForecast.display();
  hightlightDailyButton();
  active = "daily";
}

function highlightHourlyButton() {
  buttonsBar.classList.remove("hl-daily");
  buttonsBar.classList.add("hl-hourly");
}

function hightlightDailyButton() {
  buttonsBar.classList.remove("hl-hourly");
  buttonsBar.classList.add("hl-daily");
}
