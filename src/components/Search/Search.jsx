import React, { useContext, useEffect, useState } from 'react';
import styles from './Search.module.css';
import { AppContext } from '../../Context/AppContext';

const Search = () => {
  const { fetchWeatherData } = useContext(AppContext);
  const [city, setCity] = useState('');

  useEffect(() => {
    const city = localStorage.getItem("city");
    if(city){
      setCity(city);
    }
  },[]);

  const handleSearch = () => {
    fetchWeatherData(city);
  };

  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.searchTitle}>🌬️ Your City, Your Weather</h1>
      <div className={styles.searchInputContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;