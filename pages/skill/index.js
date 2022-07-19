import React, { useState } from 'react';
import classes from "../../styles/skills.module.css";
import { Text } from '@chakra-ui/react';
import { Box,SimpleGrid,Center } from "@chakra-ui/react";
import {motion,useCycle  } from "framer-motion";
import Image from 'next/image';
import { skillName } from '../../constants/constant';
import {ArrowLeftIcon} from "@chakra-ui/icons";
import About from './About';
import Return from './Return';
import Head from 'next/head';


function Index() {
  const [isVisible,setUseVisible] = useState(false);
  const handleExit = ()=>{
  router.push('/')
  }
  return (
    <>
    <Head> 
      <title>Nikhil&apos;s Skills</title>
      <link rel="shortcut icon" href="/home.jpg" type="image/jpg"/>
    </Head>
      <motion.div
        className={classes.skillContainer}
        key="child"
        initial={{ opacity: 0,height:"0%" }}
        animate={{ opacity: 1,height:"100%"}}
        exit={{ opacity: 0,height:"0%" }}
        transition={{duration:2,ease:"linear"}}
    >
    <motion.div className={classes.container}>
     <motion.div className={classes.header}></motion.div>
     <motion.div className={classes.containerBoth}>
     <motion.div className={classes.skillsC}>
      <Text textAlign="center" fontSize='3xl'><b>Skills</b></Text>
      <SimpleGrid
      textAlign="center"
  bg='white'
  columns={{ sm: 2, md: 3,lg:4 }}
  spacing="8"
  p='10'
  justifyContent= "center"
  rounded='lg'
  color='gray.400'
>
  {
      skillName.map((ele,id)=>(
        <Box 
        ml="2"
        key={id}
        as={motion.div}
        height='50px'
        width='200px'
        boxShadow='md' 
        p='2' 
        rounded='md' 
        bg='white' 
        color="black"
        transition='0.3s linear'
        alignItems="center"
        fontSize="1.2rem"
        _hover={{
          background: "white",
          color: "rgba(49,49,55,1)",
          boxShadow:'2xl'
        }}>
              <Center>
          <Image 
          src={ele.src}
          alt="react"
          width="30px"
          height="30px" 
          >
          </Image>
          <Text ml="3">{" "}{ele.name}</Text>
          
            </Center>
        </Box>
      ))
    }
      </SimpleGrid>
     </motion.div>
      <Return/>
     </motion.div>
     < About setUseVisible={setUseVisible} isVisible={isVisible}/>
     {isVisible && 
     <motion.div
     initial={{ opacity: 0,y: 100 }}
     animate={{ opacity: 1,y: 0}}
     transition={{repeatType:"reverse"}}
      className={classes.refer}>
      <p>Currently Learning Backend, my interest lie in Data Science and Development. With the development I want to create something that would be benificial to every one.</p>
     </motion.div>}
    </motion.div>
      </motion.div>
    </>
  )
}

export default Index