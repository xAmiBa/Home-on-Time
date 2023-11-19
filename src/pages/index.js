import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// importend all APIs
import { startJourney } from '@/lib/start-journey'
import { sosMessage } from '@/lib/sos-message'
import { homeSafeMessage } from '@/lib/home-safe-message'

// BUG: what is it for?
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>HomeOnTime</title>
        <meta name="description" content="An app to make sure women have arrived home on time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to <br></br> HomeOnTime!</h1>
      <div className="form">
        {/* SET UP FORM METHOD=POST */}
        <form> 
        <div>
          <label for="user-name">Your name:</label>
          <input type="text" name="user-name" id="user-name"></input>
        </div>

        <div>
          <label for="phone-number">Your name:</label>
          <input type="text" name="phone-number" id="phone-number"></input>
        </div>

        <div>
          <label for="journey-duration">Your journey duration:</label>
          <input type="number" name="journey-duration" id="journey-duration" min="5"></input>
        </div>
        </form>
      </div>

      </main>
    </>
  )
}
