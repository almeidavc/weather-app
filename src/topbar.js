import { toggleTempUnit, getTempUnit } from "./model";
import { loadWeather } from "./app";

const topbarSearchButton = document.querySelector(".topbar__search > button");
const topbarSearchInput = document.querySelector(".topbar__search > input");
const topbarUnitButton = document.querySelector(".topbar__unit");

export function setup() {
  topbarSearchButton.addEventListener("click", searchOnClick);
  topbarUnitButton.addEventListener("click", unitOnClick);
}

function searchOnClick() {
  loadWeather(topbarSearchInput.value);
}

function unitOnClick() {
  toggleTempUnit();
  topbarUnitButton.textContent = getTempUnit() === "celsius" ? "°F" : "°C";
}
