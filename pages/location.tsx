import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Location() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherDrop - Location</title>
        <meta name="description" content="a Random meme forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Your meme forecast
        </h1>

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
