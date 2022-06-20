import React from 'react'
import classes from "../styles/loader.module.css";
import { motion } from 'framer-motion';

const variant1 ={
  hidden:{
    opacity:0,
    y:"0"
  },
  enter:{
    opacity:1,
    y:["0px","-40px","0px"]
  }
}

const variant2 ={
  hidden:{
    opacity:0,
    y:"0"

  },
  enter:{
    opacity:0.8,
    y:["0px","-30px","0px"]
  }
}
const variant3 ={
  hidden:{
    opacity:0,
    y:"0"

  },
  enter:{
    opacity:0.6,
    y:["0px","-20px","0px"]
  }
}


function Loader() {
  return (
    <>
     <div className={classes.container}>
       <motion.div
       variants={variant1}
       initial="hidden"
       animate="enter" 
       transition={{
         type:"spring",
          ease: "linear",
           duration:2, 
           opacity: { ease: "linear" }
        }}
       className={classes.leftHalf}></motion.div>

      <motion.div
      variants={variant2}
      initial="hidden"
      animate="enter" 
      transition={{
        type:"spring",
        ease: "linear",
        duration:2,
      }}
      className={classes.box}></motion.div>

      <motion.div
       variants={variant3}
       initial="hidden"
       animate="enter"
       transition={{
        type:"spring",
        ease: "linear",
         duration:2, }} 
      className={classes.rightHalf}></motion.div>
     </div>
    </>
  )
}

export default Loader