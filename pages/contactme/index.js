import React,{useEffect, useState} from 'react'
import classes from "../../styles/contact.module.css";
import {motion} from "framer-motion";
import Return from "../skill/Return";

const variant = {
  initial:{height:"0vh"},
  animate:{height:"100vh"},
  exit:{height:"0%"}
}


function Index() {
 
  const [submit,setSubmit] = useState(true);
  

  const handleClick = (e)=>{
    e.preventDefault();
    setSubmit(false);
  };

  useEffect(()=>{
   let id = setTimeout(()=>{
      setSubmit(true);
    },3000)
    return ()=>{
      clearTimeout(id)
    }
  })

  return (
    <motion.div
     className={classes.container}
     variants={variant}
     initial="initial"
     animate="animate"
     exit="exit"
     transition={{duration:2}}
     >
      <div className={classes.formContainer}>
       <form onClick={handleClick}>
         <fieldset className={classes.borderW}>
           <legend>Please provide your name, email address and a comment</legend>
           <p className={classes.formP}>
             <label className={classes.label1}  htmlFor="fname">Name:* </label>
             <input type="text" id="fname" name="fname" required></input>
           </p>
           <p className={classes.formP}>
             <label className={classes.label2} htmlFor="email">Email:* </label>
             <input type="text" id="email" name="email" required></input>
           </p>
           <p className={classes.formP}>
             <label className={classes.label3}  htmlFor="phone">Phone Number:* </label>
             <input type="phone" id="phone" name="phone" required></input>
           </p>
           <p className={classes.formP}>
             <label className={classes.label4} htmlFor="comment">Comment:* </label>
             <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
           </p>
           <p className={classes.submitP}>
           <input className={classes.submit} type="submit" value="Submit"/>
           </p>
           {!submit && <h2 className={classes.heading}>Have a great day!!!</h2>}
         </fieldset>
   
       </form>
      </div>
      <Return/>
    </motion.div>
  )
}

export default Index