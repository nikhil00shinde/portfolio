import React from 'react'
import classes from "../styles/navbar.module.css";
import {Stack,Button} from "@chakra-ui/react"
import {motion } from "framer-motion";
import { links } from '../constants/constant';
import Image from 'next/image';



function Navbar() {
 
  return (
    <motion.div 
    className={classes.container}
    >
    <div className={classes.personalInfo}>
      {
        links.map((ele,ind)=>(
          <Image
          key={ind}
          src={ele.src}
          alt={ele.name}
          width="40px"
          height="40px" 
          />
        ))
      }
    </div>
    <div className={classes.copyright}>

    </div>
    </motion.div>
    
  )
}

export default Navbar