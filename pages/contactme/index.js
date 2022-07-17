import React from 'react'
import classes from "../../styles/contact.module.css";
import {motion} from "framer-motion";

const variant = {
  initial:{height:"0vh"},
  animate:{height:"100vh"},
  exit:{height:"0%"}
}


function Index() {
  return (
    <motion.div
     className={classes.container}
     variants={variant}
     initial="initial"
     animate="animate"
     exit="exit"
     transition={{duration:2}}
     >
      <div >

      </div>
    </motion.div>
  )
}

export default Index