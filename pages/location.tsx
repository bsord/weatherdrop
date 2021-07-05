import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Location() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
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

        <div className="App">
          <h1>Coordinates</h1>
          <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
        </div>

        <p className={styles.description}>
          This is the meme forecast for your location
        </p>

        <div className={styles.grid}>
        <div style={{width:"480px"}}><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/d8II8GulCQtiRliwmB" width="480"></iframe></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright WeatherDrop 2020{' '}
          
        </a>
      </footer>
    </div>
  )
}
