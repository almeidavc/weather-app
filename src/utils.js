export function getTempFormatted(temp, prefix) {
  return `${prefix ? prefix : ""}${Math.round(temp)}°`;
}

export function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

export function convertFahrenheitToCelsius(fahr) {
  return (fahr - 32) / 1.8;
}
