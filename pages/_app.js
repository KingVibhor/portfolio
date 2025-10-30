// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vibhor Kumbhare</title>
         <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Component {...pageProps} />
    </>
  )
}
