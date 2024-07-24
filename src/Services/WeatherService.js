import {
    DateTime
} from "luxon";


const API_KEY = "a4b7f8e87422797b11deeaf23a6279a8"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

const getWeatherDate = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType)
    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY
    });

    return fetch(url).then((res) => res.json()).then((data) => data)
}

const iconURLFromCode = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`

const formatToLocalTime = (secs, offset, format = "cccc, dd LLL yyyy ' | Local time: ' hh:mm a") => DateTime.fromSeconds(secs + offset, {
    zone: "utc"
}).toFormat(format)

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
        wind: {
            speed
        },
        timezone,

    } = data

    const {
        main: details,
        icon
    } = weather[0]
    const formattedLocalTime = formatToLocalTime(dt, timezone)

    return {
        temp,
        feel_like,
        temp_max,
        temp_min,
        humidity,
        name,
        country,
        sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
        sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
        speed,
        details,
        icon: iconURLFromCode(icon),
        formattedLocalTime,
        dt,
        timezone,
        lat,
        lon
    }
};

const formatForcastWeather = (secs, offset, data) => {
    //hourly
    const hourly = data
        .filter((f) => f.dt > secs)
        .map((f) => ({
            temp: f.main.temp,
            title: formatToLocalTime(f.dt, offset, "hh:mm a"),
            icon: iconURLFromCode(f.weather[0].icon),
            date: f.dt_txt
        }))
        .slice(0, 5);


    //daily
    const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00").map((f) =>({
        temp: f.main.temp,
        title: formatToLocalTime(f.dt, offset, "ccc"),
        icon: iconURLFromCode(f.weather[0].icon),
        date: f.dt_txt
    }))



    return {hourly, daily}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherDate(
        "weather",
        searchParams
    ).then(formatCurrent);

    const {
        dt,
        lat,
        lon,
        timezone
    } = formattedCurrentWeather

    const formattedForcastWeather = await getWeatherDate('forecast', {
        lat,
        lon,
        units: searchParams.units
    }).then((d) => formatForcastWeather(dt, timezone, d.list))

    return {
        ...formattedCurrentWeather,
        ...formattedForcastWeather
    }
}


export default getFormattedWeatherData