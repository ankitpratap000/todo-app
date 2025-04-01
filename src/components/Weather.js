import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "9123b796f4f7139fc1c0ca48a8e3dfd4";

  const getWeather = async () => {
    if (!city) return; // Prevents empty input request
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json(); // ✅ Fix: Await JSON response
      console.log("API Response:", data); // ✅ Debugging log
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={getWeather} style={{ padding: "8px" }}>Get Weather</button>

      {weather && weather.main ? (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}, {weather.sys?.country}</h3>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🌤 Weather: {weather.weather[0].description}</p>
        </div>
      ) : weather && weather.message ? (
        <p style={{ color: "red" }}>⚠ {weather.message}</p>
      ) : null}
    </div>
  );
}

export default Weather;
