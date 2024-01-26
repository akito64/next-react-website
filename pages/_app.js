import "styles/globals.css";
import Layout from "components/layout";
import { config } from "@fortawesome/fontawesome-svg-core";

// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"

library.add(faHouseChimney, faSun, faTwitter, faFacebookF)
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
