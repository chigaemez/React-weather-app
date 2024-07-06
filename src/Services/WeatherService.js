import {
    DateTime
} from "luxon";

const API_KEY = "a4b7f8e87422797b11deeaf23a6279a8  "
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY
    });

    return fetch(url).then((res) => res.json())
};


const formatCurrent = (data) => {
    const {
        coord: {
            lat,
            lon
        },
        main: {
            temp,
            feel_like,
            temp_min,
            temp_max,
            humidity,
        },
        name,
        dt,
        sys: {
            country,
            sunrise,
            sunset
        },
        weather,
        wind:{speed},
        timezone,
    } = data

    return{
        
    }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then()
}