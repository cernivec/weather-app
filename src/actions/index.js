import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url).then(response => (
    {
      type: FETCH_WEATHER,
      payload: response
    }
  )).catch(() => (
    {
      type: FETCH_WEATHER_ERROR
    }
  ));

  return request;
}