import React, { useState, useEffect } from "react";
import './App.css';
import getCountries from "./services/countries";
import getCities from "./services/cities";
import getCitiyWeather from "./services/weather";


const App = () => { 
  const [ countries, setCountries] = useState([]);
  const [ cities, setCities] = useState([]);
  const [ weather, setWeather] = useState(null);
  
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = async e => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null);
  }
  const cityHandler = async e => e.currentTarget.value && setWeather(await getCitiyWeather(e.currentTarget.value));
  console.log(weather)

  return (
    <>
      <div className="bg-[url('https://c.wallhere.com/photos/a4/5e/nature_landscape_sky_field_Sun_clouds-225921.jpg!d')] hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-black text-blue-900">Pronóstico del tiempo</h1>
            {/* <p className="py-6">detalle pronóstico</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-md">
            <div className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text font-black text-blue-900">Elige un país</span>
                </label>
                <select onChange={countryHandler} className='input input-bordered'>
                    <option className="bg-color-blur-sm" value="">Seleccionar</option>
                    {countries
                      .filter(country => country && country.name && country.name.common)
                      .sort((a, b) => a.name.common.localeCompare(b.name.common))
                      .map((country) => (
                        <option className="backdrop-blur-sm" key={country.cca2} value={country.cca2}>
                          {country.name.common}
                        </option>
                    ))}
                </select>
              </div>
              {cities.length > 0 && (
                <div className="form-control">
                  <label className="label" >
                    <span className="label-text font-black text-blue-900">Ahora, elige una ciudad...</span>
                  </label>
                  <select onChange={cityHandler} className="input input-bordered">
                    <option classNam="backdrop-blur-sm" value="">Seleccionar</option>
                    {cities
                    .filter(city => city && city.name)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((city) => (
                      <option key={city.id}> 
                        {city.name} 
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
          { weather && (
            <div className="card w-96 h-56 shadow-xl font-bold backdrop-blur-lg"> 
                <figure><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon'/></figure>
                <div className="card-body text-blue-900">
                  <p>{weather.name}</p>
                  <div>
                    <h2 className="text-right">Temperatura actual: {weather.main.temp.toFixed()}ºC</h2>
                    <h2 className="text-right">Sensación térmica: {weather.main.feels_like.toFixed()}ºC</h2>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
             
    </>
  );
}

export default App;
 