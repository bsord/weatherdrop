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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
        <Link href="/">
          <a>WeatherDrop.io ©
            {' '}
            {new Date().getFullYear()} - v{process.env.NEXT_PUBLIC_APP_VERSION}
          </a>
        </Link>
      </footer>
    </div>
  )
}
