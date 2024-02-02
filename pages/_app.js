import { useEffect } from 'react'
import { useRouter } from 'next/router'
import "styles/globals.css";
import Layout from "components/layout";
import Script from 'next/script'
import * as gtag from 'lib/gtag'

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"

library.add(faHouseChimney, faSun, faTwitter, faFacebookF)
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script
      strategy="afterInterractive"
      src={'https://www.googletagamanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID'}
      />
      <Script
      id="gtag-innit"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());

      gtag('config', '${gtag.GA_MEASUREMENT_ID}');
      `,
      }}
    />
    <Layout>
      <Component {...pageProps} />
      </Layout>
      </>
  );
}

export default MyApp;
