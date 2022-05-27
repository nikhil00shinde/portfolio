import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme"
console.log("🚀 ~ file: _app.js ~ line 4 ~ theme", theme)

function MyApp({ Component, pageProps }) {
 
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
