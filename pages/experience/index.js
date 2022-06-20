import React from 'react';
import classes from "../../styles/experience.module.css";
import {motion} from "framer-motion";
import { Flex,Box, Heading } from '@chakra-ui/react';
const variant = {
  initial:{width:"0%",height:"0%",opacity:0},
  animate:{width:"100vw",height:"100vh",opacity:0.7},exit:{width:"0%",height:"0%",opacity:0}

}

function Index() { 
  return (
    <motion.div
    variants={variant}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{duration:1.5,type: "spring", bounce: 0.75,stiffness: 20,mass: 0.3 ,damping: 10 }}
    className={classes.container}
    >
  <Flex maxW='2xl'
  centerContent 
  justifyContent="center" 
  alignItems="center"
  flexDirection="column"
  >
        <Heading>Experience</Heading>
  <Box padding='4' bg='blue.400' color='black' maxW='md'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
</Flex>
    </motion.div>
  )
}

export default Index