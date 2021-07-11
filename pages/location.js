import Head from 'next/head'
import styles from '../styles/Location.module.css'
import React, { useState,useEffect } from 'react';

export default function Location() {
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [feels, setFeels] = useState(null);
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherGif, setWeatherGif] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("This browser does not support Geolocation")
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        //console.log(position)
        fetchSummaryJSON(position.coords.latitude, position.coords.longitude)
      }, () => {
        console.log("Unable to retrieve your location");
      });
    }
  }

  function getWeatherGif(id, temp) {
    let apiUrl = `/api/gif?weatherId=${id}&temp=${temp}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherGif(data.gif));
  };

  function fetchSummaryJSON(lat, lng) {
    let apiUrl = `/api/summary?lat=${lat}&long=${lng}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(forecast => {
        getWeatherGif(forecast.weather_status_id, forecast.temp_actual)
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          {
              weather && weatherGif &&
              <div className={styles.logo}>
                <img src={weatherGif} alt={weather + "-gif"} width="75%" height="75%"/>
              </div>
          }
          {
            city &&
            <h1 className={styles.title}>
              {city}
            </h1>
          }
          {
            weather &&
            <h3 className={styles.description}>
               <i style={{ paddingRight:"5px" }} className="fas fa-thermometer-three-quarters"/> {temp}&deg; F &nbsp;&nbsp; | &nbsp;&nbsp; <i style={{ paddingRight:"5px" }} className="fas fa-sun"/> {weather}
            </h3>
          }
          {
            temp && feels &&
            <p className={styles.description}>
              <i className="fas fa-sun"/> Feels Like: {feels}&deg; F
            </p>
          }
          {
            low && high &&
            <div>
              <p className={styles.description}>
                <i className="fas fa-level-down-alt"/> Low: {low}&deg; F &nbsp;&nbsp; | &nbsp;&nbsp; <i className="fas fa-level-up-alt"/> High: {high}&deg; F
              </p>
            </div>
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/"> WeatherDrop.io ©
          {' '}
          {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}