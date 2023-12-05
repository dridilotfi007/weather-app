import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Tunisia");
  const [loading, setLoading] = useState(false);

  const apiKey = "b30b9782fa421ed4bf7791ffc3afb9ac";

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = (city) => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
        updateBackground(data.weather[0].description);
      });
  };

  const updateBackground = (description) => {
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${description}')`;
  };

  return (
    <div className="App">
      <div className="card">
        <SearchBar onSearch={setCity} />
        <WeatherDisplay weatherData={weatherData} loading={loading} />
      </div>
    </div>
  );
}

export default App;