import { toggleTempUnit } from "./model";
import { loadWeather } from "./app";

const topbarSearchButton = document.querySelector(".topbar__search > button");
const topbarSearchInput = document.querySelector(".topbar__search > input");
const topbarUnitButton = document.querySelector(".topbar__unit");

export function setup() {
  topbarSearchButton.addEventListener("click", onClick);
  topbarUnitButton.addEventListener("click", toggleTempUnit);
}

function onClick() {
  loadWeather(topbarSearchInput.value);
}
