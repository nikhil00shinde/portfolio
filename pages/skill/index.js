import React from 'react';
import classes from "../../styles/skills.module.css";
import { Text } from '@chakra-ui/react';
import { Box,SimpleGrid,Center } from "@chakra-ui/react";
import {motion } from "framer-motion";
import Image from 'next/image';
import { skillName } from '../../constants/constant';
function Index() {
  return (
    <>
    <div className={classes.container}>
     <div className={classes.header}></div>
     <div className={classes.skillsC}>
      <Text textAlign="center" fontSize='3xl'><bold>Skills</bold></Text>
      <SimpleGrid
      textAlign="center"
  bg='gray.50'
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
      </div>
    </div>
    </>
  )
}

export default Index