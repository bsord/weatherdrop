import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherDrop</title>
        <meta name="description" content="A page that reports the weather with memes and Gifs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">WeatherDrop!</a>
        </h1>

        <p className={styles.description}>
          Your source for daily meme based weather forecasts
        </p>

        <div className={styles.grid}>
          <a href="/location" className={styles.card}>
            <h2>My Forecast &rarr;</h2>
            <p>Get the meme forecast based on your location</p>
          </a>

          <a href="/random" className={styles.card}>
            <h2>Random City &rarr;</h2>
            <p>Get the meme forecast of the day from a random major city</p>
          </a>

          
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
