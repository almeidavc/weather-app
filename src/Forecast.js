// abstract class
// subclasses need to implement createWeatherItem() method
class Forecast {
  constructor(weatherForecastData, container) {
    // check if Forecast class is being instantiated
    if (this.constructor == Forecast) {
      throw "Forecast class can't be instantiated";
    }

    this.weatherData = weatherForecastData;
    this.container = container;
    this.loaded = false;
  }

  display() {
    if (!this.loaded) {
      this.load();
    }
    this.show();
  }

  load() {
    this.hide();
    this.container.innerHTML = "";
    this.weatherData.forEach(this.createWeatherItem.bind(this));
    this.loaded = true;
  }

  createWeatherItem() {
    throw "createWeatherItem is abstract";
  }

  hide() {
    this.container.classList.add("hidden");
  }

  show() {
    this.container.classList.remove("hidden");
  }
}

export class HourlyForecast extends Forecast {
  constructor(weatherForecastData, container) {
    super(weatherForecastData, container);
  }

  createWeatherItem({ hourUTC, temp, icon: { url } }) {
    const hourlyItem = document.createElement("div");
    hourlyItem.classList.add("hourly__item");
    hourlyItem.innerHTML = `
      <p class="hourly__hour">${hourUTC}</p>
      <img src=${url}>
      <p class="hourly__temp">${temp}°</p>
    `;
    this.container.appendChild(hourlyItem);
  }
}

export class DailyForecast extends Forecast {
  constructor(weatherForecastData, container) {
    super(weatherForecastData, container);
  }

  createWeatherItem({ weekDayUTC, temp, icon: { url } }) {
    const dailyItem = document.createElement("div");
    dailyItem.classList.add("daily__item");
    dailyItem.innerHTML = `
      <p class="daily__weekday">${weekDayUTC}</p>
      <img src=${url}>
      <div class="daily__temps">
        <span class="daily__min">${Math.round(temp.min)}°</span>
        <span>-</span>
        <span class="daily__max">${Math.round(temp.max)}°</span>
      </div>
    `;
    this.container.appendChild(dailyItem);
  }
}
