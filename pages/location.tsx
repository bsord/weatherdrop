import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Location() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [mapUrl, setMapUrl] = useState(null);
  const [forecast, setForecast] = useState(null);

  let apiKey;
  if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
    apiKey = process.env.OPEN_WEATHER_API_KEY;
    console.log("Setting API Key: " + apiKey)
  }else{
    new Error("OpenWeather API Key not found!")
  }


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        getForecast(position.coords.latitude, position.coords.longitude)
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setMapUrl(`https://www.google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}`)
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  const getForecast = (lt, lg) => {
    let apiKey;
    if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
      apiKey = process.env.OPEN_WEATHER_API_KEY;
      console.log('API Key: ' + apiKey)
      console.log('API Key ENV: ' + process.env.OPEN_WEATHER_API_KEY)
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${lg}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`;
      console.log('API Url: ' + apiUrl)
      let response = fetch(apiUrl);
      console.log('Resp: ' + response);
    }else{
      new Error("OpenWeather API Key not found!")
    }
  }
  
  return (
    <div className={styles.container} onLoad={getLocation}>
      <Head>
        <title>WeatherDrop - Location</title>
        <meta name="description" content="a Random meme forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Your meme forecast
        </h1>

        <div>
          <p className={styles.description} >
            This is the meme forecast for your location
          </p>
          <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
          {forecast && <p>Forecast: {forecast}</p>}
          <a target="_blank" rel="noopener noreferrer" href={mapUrl}>View on Google Maps</a>
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
