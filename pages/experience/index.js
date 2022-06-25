import React from 'react';
import classes from "../../styles/experience.module.css";
import {motion} from "framer-motion";
import { Flex,Box, Heading, transition } from '@chakra-ui/react';
import Link from 'next/link';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
const variant = {
  initial:{width:"0%",height:"0%",opacity:0},
  animate:{width:"100vw",height:"100vh",opacity:1},
  exit:{width:"0%",height:"0%",opacity:0}
}

const variant2 = {
  initial:{width:"0%",height:"0%",opacity:0},
  animate:{width:"100vw",height:"100%",opacity:1},
  exit:{width:"0%",height:"0%",opacity:0,}

}

function Index() { 
  return (
    <motion.div
    variants={variant}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{duration:2,type: "spring", bounce: 0.75,stiffness: 20,mass: 0.3 ,damping: 10 }}
    className={classes.container}
    >
      <motion.div
        variants={variant2}
        transition={{duration:2}}
        style={{display:"flex",justifyContent:"center",alignItems: "flex-start",paddingTop:"7rem"}}
      >
      <Flex
    
      maxW='2xl'
      centerContent 
      justifyContent="center" 
      alignItems="center"
      flexDirection="column"
      >
      <Heading as='h2' size='xl' sx={{  color: 'white'  }}>Experience</Heading>
      <Box padding='4' bg='black' color='black' minW="25rem" maxW='24rem' mt='2'>
      <UnorderedList>
  <ListItem color='white'>
  <Heading as='h3' size='lg' sx={{  color: 'white'  }}>
          Full Stack Intern
       </Heading>
       <Heading mt="3" as='h4' size='md' sx={{  color: 'white'  }}>
       <Link href="https://www.happilyever.co/" >
       <a target="_blank" rel="noopener noreferrer">HappilyEver Lens</a></Link>
  </Heading>
  </ListItem>
  
</UnorderedList>
      

      </Box>
    </Flex>
    </motion.div>
    </motion.div>
  )
}

export default Index