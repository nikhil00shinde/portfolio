import React from 'react'
import classes from "../styles/navbar.module.css";
import {Stack,Button} from "@chakra-ui/react"
import {motion } from "framer-motion";
import { links } from '../constants/constant';
import Image from 'next/image';
import Link from 'next/link';

const variant = {
  "hidden":{
    opacity:0.2,
  },
  "enter":{
    opacity:1
  }
}

function Navbar() {
 
  return (
    <motion.div 
    className={classes.container}
    >
    <div className={classes.personalInfo}>
      {
        links.map((ele,ind)=>(
          <motion.div
          className={classes.middle}
          key={ind}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          >
            <Link
            href={ele.link}
            >
            <a
            target="_blank"
            >
          <Image
          className={classes.image}
          src={ele.src}
          alt={ele.name}
          width="40px"
          height="40px" 
          />
           </a>
            </Link>
          </motion.div>
        ))
      }
    </div>
    <div className={classes.copyright}>
      <h3>
    <small>&copy; Copyright 2022. All Rights Reserved</small>
    </h3>
    </div>
    </motion.div>
    
  )
}

export default Navbar