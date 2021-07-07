import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Location() {
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [feels, setFeels] = useState(null);
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherId, setWeatherId] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        //console.log(position)
        fetchForecastJSON(position.coords.latitude, position.coords.longitude).then(forecast => {
          console.log(forecast)
          setCity(forecast.city)
          setWeather(forecast.weather_status)
          setWeatherId(forecast.weather_status_id)
          setTemp(forecast.temp_actual)
          setFeels(forecast.temp_feels)
          setLow(forecast.temp_low)
          setHigh(forecast.temp_high)
          
        }).catch(
          console.log("Unable to get Forecast from API")
        )
      }, () => {
        console.log("Unable to retrieve your location");
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
        </div>
        {
            weatherId > 0 &&
            <WeatherGif weatherIds={weatherId}/>
          }
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

const WeatherGif = (props) => {
  console.log(props)
    let apiUrl = `/api/gif?weatherId=${props.weatherIds}`;
    const gifUrl =  fetch(apiUrl).then(response => {
      return response.json().gif
    });
    if(gifUrl){
      return (
        <img src={gifUrl} />
      )
    } else {
      return (<div>loading</div>)
    }
    
}