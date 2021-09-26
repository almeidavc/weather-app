import { HourlyForecast, DailyForecast } from "./Forecast";

const hourlyButton = document.querySelector(".hourly__button");
const dailyButton = document.querySelector(".daily__button");
const hourlyContainer = document.querySelector(".hourly");
const dailyContainer = document.querySelector(".daily");
const buttonsBar = document.querySelector(".buttons__bottom-bar");

let hourlyForecast;
let dailyForecast;
let active = "hourly";

export function setup() {
  setupButtons();
}

export function display(weatherData) {
  loadForecasts(weatherData);
  if (active === "hourly") {
    displayHourlyForecast();
  } else {
    displayDailyForecast();
  }
}

function loadForecasts(weatherData) {
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
  buttonsBar.style.left = "0";
  /* buttonsBar.classList.remove("hl-daily");
  buttonsBar.classList.add("hl-hourly"); */
}

function hightlightDailyButton() {
  buttonsBar.style.left = "100%";
  /* buttonsBar.classList.remove("hl-hourly");
  buttonsBar.classList.add("hl-daily"); */
}
