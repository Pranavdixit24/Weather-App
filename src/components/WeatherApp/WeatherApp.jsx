import React, { useState } from 'react'
import './WeatherApp.css'
import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
import drizzle_icon from '../../assets/drizzle.png'
import humidity_icon from '../../assets/humidity.png'
import rain_icon from '../../assets/rain.png'
import search_icon from '../../assets/search.png'
import snow_icon from '../../assets/snow.png'
import wind_icon from '../../assets/wind.png'


const WeatherApp = () => {
    let api_key="f286fd9ac2e786579832643030488317"
    const [icon,setIcon] = useState(rain_icon);

    const search =async()=>{
        let element = document.getElementById("input-bar");
        if(element.value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element.value}&appid=${api_key}&units=metric`;


        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        
        const humidity = document.getElementsByClassName("humidity")
        const wind = document.getElementsByClassName("wind")
        const location = document.getElementsByClassName("city")
        const temperature = document.getElementsByClassName("temp")

        humidity[0].innerHTML = `${data.main.humidity} %`;
        wind[0].innerHTML = `${data.wind.speed} km/h`;
        temperature[0].innerHTML = `${data.main.temp} °C`;
        location[0].innerHTML = `${data.name}`;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setIcon(clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setIcon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setIcon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setIcon(drizzle_icon)
        }
        
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setIcon(rain_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setIcon(rain_icon)
        }
        else{
            setIcon(snow_icon)
        }
        

    }
  return (
    <>    
        <div className="card">
            <div className="search-bar">
                <input type="text" id="input-bar" placeholder="Enter city name"/>
                <button onClick={search}><img src={search_icon}/></button>
            </div>
            <div className="weather">
                <img src={icon} className="weather-icon"/>
                <h1 className="temp">22°C</h1>
                <h2 className="city">New York</h2>
                <div className="details">
                    <div className="col">
                        <img src={humidity_icon}/>
                        <div>
                            <p className="humidity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon}/>
                        <div>
                            <p className="wind">15 km/h</p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default WeatherApp

