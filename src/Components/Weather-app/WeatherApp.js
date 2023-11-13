import React from 'react'
import './WeatherApp.css'
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

export const WeatherApp = () => {
  return (  
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityinput' placeholder='search'/>
            <div className="search-icon">
                <img src={search_icon} alt="search"/>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="cloud"/>
            </div>
        </div>
        <div className='weather-image'>
            <img src='{cloud_icon}' alt = "" />
        </div>
        
    </div>
  )
}
