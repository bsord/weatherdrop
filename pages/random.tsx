import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GiphyFetch } from '@giphy/js-fetch-api'

export default function Random({gifUrl}:any) {
  console.log(gifUrl)
  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherDrop - Random</title>
        <meta name="description" content="a Random meme forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random Meme Forecast
        </h1>

        <p className={styles.description}>
          Click  <Link href="/random"><a>here</a></Link> to get a new random forecast
        </p>

        <div className={styles.grid}>
        {gifUrl && (
            <img src={gifUrl} alt="Meme forecast" />
          )}
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

export async function getStaticProps() {

  // get Gif and pass to the page props
  const giphyApiKey = process.env.GIPHY_KEY || "" 
  let gifUrl = ""
  if(giphyApiKey != ""){
    const gf = new GiphyFetch(giphyApiKey)
    const { data: gifs } = await gf.search('weather', { sort: 'relevant', lang: 'es', limit: 1, type: 'gifs' })
    gifUrl = gifs[0].images.original.url
  } else {
    gifUrl = "https://media1.giphy.com/media/H7wajFPnZGdRWaQeu0/giphy.gif?cid=1995ed6coh4r816dv8hr3gw8f9p3clzvdsctlffxsvedomvr&rid=giphy.gif&ct=g"
  }
  
  return {
    props: { gifUrl},
  }
}

  