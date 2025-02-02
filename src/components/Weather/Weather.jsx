import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import ErrorHandling from '../ErrorHandling/Errorhandling';  
import styles from './weather.module.css';

const Weather = () => {
  const { weatherData, weatherData5days, error, loading } = useContext(AppContext);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (loading) return <div>Loading...</div>;
  if (error) return <div className={styles.errorMessage}>{error}</div>;

  if (!weatherData) return null;

  const [convertToFahrenheit, setConvertToFahrenheit] = useState(false);
  const sunrise = new Date((weatherData.sys.sunrise + weatherData.timezone) * 1000);
  const day = days[sunrise.getDay()];
  const date = sunrise.getDate();
  const month = months[sunrise.getMonth()];
  const year = sunrise.getFullYear();

  const getDayName = (timestamp) => {
    const dayDate = new Date((timestamp + weatherData.timezone) * 1000);
    return days[dayDate.getDay()];
  };

  return (
    <div className={styles.weatherContainer}>
      <ErrorHandling />

      <div className={styles.leftSection}>
        <div>
          <h2 className={styles.weatherTitle}>Weather in {weatherData.name}</h2>
          <div className={styles.dateTime}>
            <p>{day}, {month} {date}, {year}</p>
          </div>
          <div className={styles.weatherTempAndIcon}>
            <img 
              className={styles.weatherIcon} 
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
              alt="Weather Icon" 
            />
            <p 
              onClick={() => setConvertToFahrenheit(!convertToFahrenheit)} 
              className={styles.weatherTemp}
            >
              {convertToFahrenheit 
                ? `${((weatherData.main.temp * 9/5) + 32).toFixed(1)} °F` 
                : `${weatherData.main.temp} °C`}
            </p>
          </div>
          <div className={styles.weatherDetails}>
            <div className={styles.weatherItem}>
              <i className="fas fa-tint"></i>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </div>
            <div className={styles.weatherItem}>
              <i className="fas fa-wind"></i>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
            <div className={styles.weatherItem}>
              <i className="fas fa-cloud-sun"></i>
              <p className={styles.weatherDescription}>Weather: {weatherData.weather[0].description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img 
          className={styles.largeWeatherIcon} 
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
          alt="Large Weather Icon" 
        />
        
        
        {weatherData5days.length > 0 && (
          <div className={styles.forecastContainer}>
            {weatherData5days.map((forecast, index) => (
              <div key={index} className={styles.forecastItem}>
                <p className={styles.forecastDay}>{getDayName(forecast.dt)}</p> 
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                  className={styles.weatherIcon}
                />
                <p className={styles.temperature}>
                  {convertToFahrenheit 
                    ? `${((forecast.main.temp * 9/5) + 32).toFixed(1)} °F`
                    : `${forecast.main.temp} °C`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;