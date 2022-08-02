import React,{useState} from 'react';
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
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Return from '../skill/Return';
import Head from 'next/head';
import Navbar from '../Navbar';
import About from '../skill/About';

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
  const [isVisible,setUseVisible] = useState(false);
  return (
    <>
     <Head> 
      <title>Nikhil&apos;s Experience</title>
      <link rel="shortcut icon" href="/home.jpg" type="image/jpg"/>
    </Head>
    <motion.div
    variants={variant}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{duration:1,type: "spring", bounce: 0.75,stiffness: 20,mass: 0.3 ,damping: 10 }}
    className={classes.container}
    >
      <motion.div
        variants={variant2}
        transition={{duration:2}}
        style={{display:"flex",justifyContent:"center",alignItems: "flex-start",paddingTop:"7rem"}}
        className={classes.experienceC}
      >
      <Flex
    
    maxW='2xl' 
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
      <Text sx={{  color: 'white',mt:"2",lineHeight:"none"    }} fontSize='md'>Worked mainly on Frontend part using react and Backend using Golang using gin framework</Text>
      <Text sx={{  color: 'white',mt:"2",lineHeight:"none"  }} fontSize='md'>My major work is to change the UI. My major contribution is HMA and KYP product. And for testing we learn to use of cypress.</Text>
</UnorderedList>
      </Box>
    </Flex>
    </motion.div>
     <Return/> 
     {isVisible && 
     <motion.div
     initial={{ opacity: 0,y: 200 }}
     animate={{ opacity: 1,y: 0}}
     transition={{repeatType:"reverse"}}
      className={classes.refer}>
      <p>Currently Learning Backend, my interest lie in Data Science and Development. With the development I want to create something that would be benificial to every one.</p>
     </motion.div>
     }
    < About setUseVisible={setUseVisible} isVisible={isVisible}/>
    </motion.div>
    </>
  )
}

export default Index