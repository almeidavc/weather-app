const hourlyContainer = document.querySelector(".hourly");
const dailyContainer = document.querySelector(".daily");

export default class Forecast {
  static displayHourly(weatherData) {
    for (let i = 0; i < 24; i++) {
      Forecast.createHourlyItem(weatherData.hourly[i]);
    }
  }

  static displayDaily() {}

  static createHourlyItem({ hourUTC, temp, icon: { url } }) {
    const hourlyItem = document.createElement("div");
    hourlyItem.classList.add("hourly__item");
    hourlyItem.innerHTML = `
      <p class="hourly__hour">${hourUTC}</p>
      <img src=${url}>
      <p class="hourly__temp">${temp}</p>
    `;
    hourlyContainer.appendChild(hourlyItem);
  }
}
