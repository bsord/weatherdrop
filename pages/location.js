import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState,useEffect } from 'react';

export default function Location() {
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [feels, setFeels] = useState(null);
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherGif, setWeatherGif] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("This browser does not support Geolocation")
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        //console.log(position)
        fetchForecastJSON(position.coords.latitude, position.coords.longitude)
      }, () => {
        console.log("Unable to retrieve your location");
      });
    }
  }

  function getWeatherGif(id) {
    let apiUrl = `/api/gif?weatherId=${id}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherGif(data.gif));
  };

  function fetchForecastJSON(lat, lng) {
    let apiUrl = `/api/forecast?lat=${lat}&long=${lng}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(forecast => {
        getWeatherGif(forecast.weather_status_id)
        setCity(forecast.city)
        setWeather(forecast.weather_status)
        setTemp(forecast.temp_actual)
        setFeels(forecast.temp_feels)
        setLow(forecast.temp_low)
        setHigh(forecast.temp_high)
      });

  }
  
  useEffect(()=>{
    getLocation()
  }, []);

  return (
    <div className={styles.container} >
      <Head>
        <title>WeatherDrop - Location</title>
        <meta name="description" content="a Random meme forecast" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/all.css" />
      </Head>

      <main className={styles.main}>
        {
          city &&
          <h1 className={styles.title}>
            {city}
          </h1>
        }

        <div>
          {
            weather &&
            <p className={styles.description}>
              Current Conditions: {weather}
            </p>
          }
          {
            temp && feels &&
            <p className={styles.description}>
              Currently: {temp}&deg; F &nbsp;&nbsp; | &nbsp;&nbsp; Feels Like: {feels}&deg; F
            </p>
          }
          {
            low && high &&
            <p className={styles.description}>
              Low: {low}&deg; F &nbsp;&nbsp; | &nbsp;&nbsp; High: {high}&deg; F
            </p>
          }
          {
            weather && weatherGif && 
            <img src={weatherGif} alt={weather + "-gif"} width="50%" height="50%"/>
          }
        </div>

      </main>

      <footer className={styles.footer}>
        <a href="https://weatherdrop.io">
          WeatherDrop.io ©
          {' '}
          {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}