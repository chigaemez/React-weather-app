
import { useEffect, useState } from "react"
import getFormattedWeatherData from "./Services/WeatherService"
import Forecast from "./components/Forecast"
import Input from "./components/Input"
import TempAndDetail from "./components/TempAndDetail"
import TimeAndLocation from "./components/TimeAndLocation"
import TopBotton from "./components/TopBotton"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {

  const [query, setQuery] = useState({ q: 'nigeria' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {

    const cityName = query.q ? query.q : "current location"
    // toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`)
    await getFormattedWeatherData({ ...query, units }).then((data) => {

      // toast.success(`Data fetched  for ${data.name}, ${data.country}`)
      setWeather(data)
    })
    console.log(data)
  };

  useEffect(() => {
    getWeather()

  }, [query, units])


  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshod = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshod) return 'from-cyan-600 to-blue-700'
    return 'from-[#171e44] to-[#4e4674]';
  }

  return (
    <div className={`mx-auto w-[80%] rounded-lg  lg:mt-4 py-5 lg:px-24   bg-gradient-to-br shadow-xl shadow-gray-700  ${formatBackground()}`}>
      <TopBotton setQuery={setQuery} weather={weather} setUnits={setUnits} units={units} />
      <Input setQuery={setQuery} setUnits={setUnits} />
      {
        weather && (
          <>

            <TimeAndLocation weather={weather} />
            <TempAndDetail weather={weather} units={units} />
            <Forecast title="show 3 HOUR STEP FORECAST" data={weather.hourly} />
            <Forecast title=" show Daily forcast" data={weather.daily} />
          </>
        )
      }

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />

    </div>
  )
}

export default App
