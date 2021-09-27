import { toggleTempUnit, getTempUnit } from "./model";
import { loadWeather } from "./app";

const topbarSearch = document.querySelector(".topbar__search");
const topbarSearchInput = document.querySelector(".topbar__search > input");
const topbarUnitButton = document.querySelector(".topbar__unit");

export function setup() {
  topbarSearch.addEventListener("submit", formOnSubmit);
  topbarUnitButton.addEventListener("click", unitOnClick);
}

function formOnSubmit(event) {
  event.preventDefault();
  loadWeather(topbarSearchInput.value);
  resetForm();
}

function resetForm() {
  topbarSearchInput.value = "";
}

function unitOnClick() {
  toggleTempUnit();
  topbarUnitButton.textContent = getTempUnit() === "celsius" ? "°F" : "°C";
}
