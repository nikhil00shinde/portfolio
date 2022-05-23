import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("🚀 ~ file: _app.js ~ line 4 ~ MyApp ~ Component", Component)
  return <Component {...pageProps} />
}

export default MyApp
