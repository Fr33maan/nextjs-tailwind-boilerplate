import { useEffect } from 'react'
import { startSlideInObserver } from '@lib/scrollObserver'
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    startSlideInObserver()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
