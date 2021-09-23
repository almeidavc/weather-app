function setTemp(element, temp, prefix) {
  element.textContent = `${prefix ? prefix : ""}${temp}°`;
}

export { setTemp };
