const openWeatherLogo = document.querySelector(".openweather-logo");

export function startLoadingAnimation() {
  openWeatherLogo.classList.add("active");
}

export function stopLoadingAnimation() {
  openWeatherLogo.classList.remove("active");
}
