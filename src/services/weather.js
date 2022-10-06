import { ajax } from "../tools/ajax"
/* const axios = require("axios"); */

export const getCitiyWeather = async city => {
    const optionsReq = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
          q: city,
          appid: "1988fe90ed9b859c5f01165e3d438c5b",
          units: "metric" //ºCelsius
        }
    };
  return await ajax(optionsReq);
}


export default getCitiyWeather