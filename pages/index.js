import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherDrop</title>
        <meta name="description" content="A page that reports the weather with memes and Gifs!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <i style={{ color:'#E5E5E5' }} className="fas fa-cloud-sun fa-9x"></i>
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">WeatherDrop</a>
        </h1>
        <h2 className={styles.description}>
          Your source for daily meme based weather forecasts
        </h2>
        <div className={styles.grid}>
          <Link href="/location">
            <a href="" className={styles.card}>
              <i style={{ float:"left", paddingRight:"10px" }} className="fas fa-map-marker-alt fa-2x"></i>
              <h2 style={{ color:"#FCA311" }}>My Forecast &rarr;</h2>
              <p style={{ color:'#E5E5E5' }}>Get the meme forecast based on your location</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/">
          WeatherDrop.io ©
          {' '}
          {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}
