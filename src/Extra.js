import { HourlyForecast, DailyForecast } from "./Forecast";

const hourlyButton = document.querySelector(".hourly__button");
const dailyButton = document.querySelector(".daily__button");
const hourlyContainer = document.querySelector(".hourly");
const dailyContainer = document.querySelector(".daily");
const buttonsBar = document.querySelector(".buttons__bottom-bar");

export default class Extra {
  static hourlyForecast;
  static dailyForecast;
  static active;

  static setup(weatherData) {
    this.setupButtons();
    this.setupForecasts(weatherData);
    this.displayHourlyForecast();
  }

  static update(weatherData) {
    this.setupForecasts(weatherData);
    if (this.active === "hourly") {
      this.displayHourlyForecast();
    } else {
      this.displayDailyForecast();
    }
  }

  static setupForecasts(weatherData) {
    this.hourlyForecast = new HourlyForecast(
      weatherData.hourly,
      hourlyContainer
    );
    this.dailyForecast = new DailyForecast(weatherData.daily, dailyContainer);
    this.hourlyForecast.load();
    this.dailyForecast.load();
  }

  static setupButtons() {
    hourlyButton.addEventListener(
      "click",
      this.displayHourlyForecast.bind(this)
    );
    dailyButton.addEventListener("click", this.displayDailyForecast.bind(this));
  }

  static displayHourlyForecast() {
    this.dailyForecast.hide();
    this.hourlyForecast.display();
    this.highlightHourlyButton();
    this.active = "hourly";
  }

  static displayDailyForecast() {
    this.hourlyForecast.hide();
    this.dailyForecast.display();
    this.hightlightDailyButton();
    this.active = "daily";
  }

  static highlightHourlyButton() {
    buttonsBar.classList.remove("hl-daily");
    buttonsBar.classList.add("hl-hourly");
  }

  static hightlightDailyButton() {
    buttonsBar.classList.remove("hl-hourly");
    buttonsBar.classList.add("hl-daily");
  }
}
