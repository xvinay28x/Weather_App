import React, { useState } from 'react'
import Swal from 'sweetalert2';
import './Search_bar.css'

export default function Search_bar() {

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const api_key = "3c72156ee4c3bc91f8d7d1a63febe54f"

    const search = async (e) => {

        if (city == "") {
            Swal.fire('Please enter the city')
            return
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

        let response = await fetch(url);
        let data = await response.json();
        let temp = data.main.temp;
        let humidity = data.main.humidity;
        let wind_speed = data.wind.speed;
        let location = data.name
        let icon = data.weather[0].icon;
        let weather = data.weather[0].main
        
        setWeatherData({
            temp: temp,
            weather: weather,
            humidity: humidity,
            wind_speed: wind_speed,
            location: location,
            icon: `${icon}.png`,
        })
    }

    return (
        <div>
            <div className="search_cont">
                <input
                    id="input"
                    type="text"
                    className="search_bar"
                    placeholder="Search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}>
                </input>
                <div className="search_icon" onClick={() => search()}>
                    <img id="search" src="4.png" alt="search" />
                </div>
                
            </div>
            <div className="icon_cont">
                {
                    weatherData.icon && <img id="icon"
                        src={weatherData.icon} />
                }
                <h1 id="city">{weatherData.location}</h1>
            </div>
            {weatherData.temp &&
                <div className="temp">
                    <h1 id="temp">{`${weatherData.temp}° C`}</h1>
                </div>}
            {weatherData.wind_speed &&
                <div className="wind_speed_cont">
                    <img id="wind" src="8.png" />
                    <h1 id="wind_text">{"Wind Speed : " + weatherData.wind_speed + " km/h"}</h1>
                </div>}
            {weatherData.humidity &&
                <div className="humidity_cont">
                    <img id="humidity" src="5.png" />
                    <h1 id="humidity_text">{"Humidity : " + weatherData.humidity + " %"}</h1>
                </div>}
        </div>
    )
}