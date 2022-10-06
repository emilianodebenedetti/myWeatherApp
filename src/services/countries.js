import { ajax } from "../tools/ajax"

const getCountries = async () => {
    const optionsReq = {
        method: "GET",
        url: "https://restcountries.com/v3.1/all" /* https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all */
      };
  return await ajax(optionsReq);
}

export default getCountries
