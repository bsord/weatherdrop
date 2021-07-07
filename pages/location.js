import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Location() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState(null);
  const [mapUrl, setMapUrl] = useState(null);
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [feels, setFeels] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("");
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        fetchForecastJSON(position.coords.latitude, position.coords.longitude).then(forecast => {
          console.log(forecast)
          setCity(forecast.city)
          setTemp(forecast.temp_actual)
          setFeels(forecast.temp_feels)
          setWeather(forecast.weather_status)
          setWeatherDesc(forecast.weather_status_desc)
        }).catch(
          console.log("Unable to get Forecast from API")
        )
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  async function fetchForecastJSON(lat, lng) {
    let apiUrl = `/api/forecast?lat=${lat}&long=${lng}`;
    const response = await fetch(apiUrl);
    const forecast = await response.json();
    //console.log(forecast)
    return forecast;
  }
  
  return (
    <div className={styles.container} onLoad={getLocation}>
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
              {weather}
            </p>
          }
          {
            weatherDesc &&
            <p className={styles.description}>
              {weatherDesc}
            </p>
          }
        </div>

        <div className={styles.grid}>
          <div style={{width:"480px"}}><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/d8II8GulCQtiRliwmB" width="480"></iframe></div>
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
