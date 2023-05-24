import Header from '../components/Header'
import Footer from "../components/Footer"
import Head from 'next/head'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

// own css files here
/*import '../styles/globals.css'

import "../styles/footer.css"
import "../styles/members.css"
import "../styles/member.css"*/
import "../styles/theme.scss"
import "../styles/banner.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className=' bg-primary'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp