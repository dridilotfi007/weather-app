import React from "react";

function WeatherDisplay({ weatherData, loading }) {
  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather">
      <h2 className="city">Weather in {weatherData.name}</h2>
      <h1 className="temp">{weatherData.main.temp}°C</h1>
      <div className="flex">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt=""
          className="icon"
        />
        <div className="description">{weatherData.weather[0].description}</div>
      </div>
      <div className="humidity">Humidity: {weatherData.main.humidity}%</div>
      <div className="wind">Wind speed: {weatherData.wind.speed} km/h</div>
    </div>
  );
}

export default WeatherDisplay;