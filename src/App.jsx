
import getFormattedWeatherData from "./Services/WeatherService"
import Forecast from "./components/Forecast"
import Input from "./components/Input"
import TempAndDetail from "./components/TempAndDetail"
import TimeAndLocation from "./components/TimeAndLocation"
import TopBotton from "./components/TopBotton"


function App() {

const getWeather = async() => {
  const data = await getFormattedWeatherData({ q: "nigeria"})
  console.log(data)
}

  getWeather()

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-3 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 ">
        <TopBotton/>
        <Input/>
        <TimeAndLocation/>
        <TempAndDetail/>
        <Forecast/>
        <Forecast/>
    </div>
  )
}

export default App
