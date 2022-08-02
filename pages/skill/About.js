import React from 'react'
import classes from "../../styles/skills.module.css";
import {TriangleUpIcon} from "@chakra-ui/icons"
function About({setUseVisible,isVisible}) {
  console.log("kjzdnfljnafe")
  return (
    <div 
    className={classes.about} onClick={()=> setUseVisible(!isVisible)}>
     <TriangleUpIcon/>
    </div>
  )
}

export default About