import { fetchWeatherData, fetchCoords, fetchWeatherIcons } from "./weatherApi";

let weatherIcons;

export async function getWeather(locationName) {
  try {
    await getWeatherIcons();
    return await getWeatherData(await getExactLocation(locationName));
  } catch (error) {
    console.log(error);
  }
}

async function getWeatherIcons() {
  weatherIcons = weatherIcons ? weatherIcons : await fetchWeatherIcons();
}

async function getExactLocation(locationName) {
  const [{ name, lat, lon }] = await fetchCoords(locationName);
  return { name, lat, lon };
}

async function getWeatherData({ name, lat, lon }) {
  return {
    location: name,
    ...transformWeatherData(await fetchWeatherData(lat, lon, "metric")),
  };
}

function transformWeatherData(weatherData) {
  return {
    current: filterCurrentData(weatherData.current),
    hourly: weatherData.hourly.map((item) => transformDataItem(item, "hour")),
    daily: weatherData.daily.map((item) => transformDataItem(item, "day")),
  };
}

function transformDataItem(item, unitOfTime) {
  let result;

  if (unitOfTime === "hour") {
    result = filterHourlyDataItem(item);
  } else {
    result = filterDailyDataItem(item);
  }

  setWeatherIcon(result);
  return result;
}

function filterCurrentData({ temp, weather: [{ description }] }) {
  return { temp, description };
}

function filterHourlyDataItem({ dt, temp, weather: [{ description, icon }] }) {
  return {
    temp,
    description,
    iconID: icon,
    hourUTC: new Date(dt * 1000).getUTCHours(),
  };
}

function filterDailyDataItem({ dt, temp, weather: [{ description, icon }] }) {
  return {
    description,
    iconID: icon,
    temp: (({ max, min }) => ({ max, min }))(temp),
    weekDayUTC: new Date(dt * 1000).toUTCString().substring(0, 3),
  };
}

function setWeatherIcon(item) {
  item.icon = getWeatherIcon(item.iconID);
  delete item.iconID;
}

function getWeatherIcon(id) {
  return weatherIcons.find((icon) => icon.id === id);
}
