import '../styles/globals.css'
import Layout from '../comps/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (   
          <Layout>
             <Head>
            <meta charset="UTF-8"/>
              <meta name="description" content="Free Web tutorials"/>
              <meta name="keywords" content="massage barnet, massage in london, spa, day off "/>
              <meta name="author" content="Arthur"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
            <Component {...pageProps} />
          </Layout>)
}
    

export default MyApp
