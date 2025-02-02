import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherData5days, setWeatherData5days] = useState([]);
  const [error, setError] = useState(null);
  
  const apikey = import.meta.env.VITE_API_KEY;

  // Fetch weather data
  const fetchWeatherData = async (city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found or invalid API response");
      }

      const data = await response.json(); 
      setWeatherData(data);
      setError(null);
      localStorage.setItem("city", city);
      localStorage.setItem("weatherData", JSON.stringify(data));
    } catch (err) {
      console.error("Error Fetching Data:", err);
      setError(err.message);
      localStorage.removeItem("weatherData");
      localStorage.removeItem("city");
      setWeatherData(null);
      setWeatherData5days([]);
    }
  };

  // Get weather data from local storage
  useEffect(() => {
    const city = localStorage.getItem("city");
    const data = JSON.parse(localStorage.getItem("weatherData"));

    if (data && data.name === city) {
      setWeatherData(data);  
    } else if (city) {
      fetchWeatherData(city);
    }
  }, []);

  // Fetch 5-day weather data
  const fetchWeatherData5days = async (lat, lon) => {
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch 5-day forecast");
      }
      const data = await response.json();
      const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));
      setWeatherData5days(dailyForecast.slice(0, 5));
    } catch (err) {
      setError(err.message); 
    }
  };

  useEffect(() => {
    if (weatherData && weatherData.coord) {
      fetchWeatherData5days(weatherData.coord.lat, weatherData.coord.lon);
    }
  }, [weatherData]);

  // Polling every 30 seconds for updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (weatherData) {
        fetchWeatherData(weatherData.name);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [weatherData]);

  const value = {
    fetchWeatherData,
    weatherData,
    weatherData5days,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;