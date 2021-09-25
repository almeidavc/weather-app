import { HourlyForecast, DailyForecast } from "./Forecast";

const hourlyButton = document.querySelector(".hourly__button");
const dailyButton = document.querySelector(".daily__button");
const hourlyContainer = document.querySelector(".hourly");
const dailyContainer = document.querySelector(".daily");

export default class Extra {
  static hourlyForecast;
  static dailyForecast;

  static display(weatherData) {
    this.setupForecastComponents(weatherData);
    this.setupButtons();
    this.displayHourlyForecast();
  }

  static update(weatherData) {
    this.setupForecastComponents(weatherData);
  }

  static setupForecastComponents(weatherData) {
    this.hourlyForecast = new HourlyForecast(
      weatherData.hourly,
      hourlyContainer
    );
    this.dailyForecast = new DailyForecast(weatherData.daily, dailyContainer);
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
  }

  static displayDailyForecast() {
    this.hourlyForecast.hide();
    this.dailyForecast.display();
  }
}
