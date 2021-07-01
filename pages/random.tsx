import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Random() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherDrop - Random</title>
        <meta name="description" content="a Random meme forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ramdom Meme Forecast
        </h1>

        <p className={styles.description}>
          Click <a href="/random" >here</a> to get a new random forecast
        </p>

        <div className={styles.grid}>
          <div style={{width:"480px"}}><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/2Um7AguA3qnKSafglE" width="480"></iframe></div>
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
