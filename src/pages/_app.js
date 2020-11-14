import Head from 'next/head'
import React from 'react'

const KeepWorksSiteApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#26283b" />
      {/* Font */}
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default KeepWorksSiteApp
