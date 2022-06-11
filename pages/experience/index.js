import React from 'react';
import classes from "../../styles/experience.module.css";
import {motion} from "framer-motion";

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
    >I</motion.div>
  )
}

export default Index