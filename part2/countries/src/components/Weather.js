import axios from "axios"
import { useState, useEffect } from "react"

const apikey = process.env.REACT_APP_API_KEY

const Weather = ({country}) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apikey}`)
      .then((resp) => { 
        setWeather(resp.data)
      })
      .catch(() => {
        console.log("Failed to get weather information from OpenWeather")
      })
  }, [])

  if (!weather.hasOwnProperty('main')) {
    return <p>Waiting for weather information...</p>
  } 

  return <>
    <p>Temperature: {weather.main.temp}</p>
    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} /><br />
    <p>Wind: {weather.wind.speed} m/s</p>
  </>
}

export default Weather;