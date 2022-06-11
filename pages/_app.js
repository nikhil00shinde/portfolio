import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme"
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps,router }) {
 
  return (
    
    <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter >
          <motion.div key={router.route}>
            <Component {...pageProps} />
            </motion.div>
       </AnimatePresence>
      </ChakraProvider>
  )
}

export default MyApp
