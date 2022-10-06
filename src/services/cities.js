import { ajax } from "../tools/ajax"
/* const axios = require("axios"); */

const getCities = async countryCode => {
    const optionsReq = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places", /* https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all */
        headers : {
        "X-RapidAPI-Key"  :"392c7ae1damsh80ceaa97f535334p159ad4jsn7f6fd6d11669" ,
        "X-RapidAPI-Host"  : "spott.p.rapidapi.com" 
        },
        params: {
          limit: 100,
          type: "CITY",
          country: countryCode ?? "ES",
        },

      };
  return await ajax(optionsReq);
}

export default getCities