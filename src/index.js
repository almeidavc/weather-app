import "regenerator-runtime/runtime";
import { getWeatherData } from "./weatherApi";

getWeatherData("london").then(console.log);
