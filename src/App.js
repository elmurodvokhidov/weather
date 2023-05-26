import { useState } from "react";
import { CURRENT_WEATHER_API_URL, WEATHER_API_KEY } from "./API";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import './Main.css';
import Forecast from "./components/forecast/Forecast";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  function handleOnSearchChange(a) {
    const [lat, lon] = a.value.split(' ');

    const currentWeatherFetch = fetch(`${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        let weatherResponse = await res[0].json();
        let forecastResponse = await res[1].json();

        setCurrentWeather({ city: a.label, ...weatherResponse });
        setForecast({ city: a.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));

  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
