import React,{useEffect, useState} from 'react'
import classes from "../../styles/contact.module.css";
import {motion} from "framer-motion";
import Return from "../skill/Return";
import Head from 'next/head';
import Navbar from '../Navbar';

const variant = {
  initial:{height:"0vh"},
  animate:{height:"100vh"},
  exit:{height:"0%"}
}


function Index() {
 
  const [submit,setSubmit] = useState(true);
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [comment,setComment] = useState("")
  
  

  const handleClick =(e)=>{
    console.log("runnsf knafkajwf");
    e.preventDefault();
    setSubmit(false);
    let data = {email,name,phone,comment}
    fetch("http://localhost:5000/cntc",{
    method: 'POST',
    mode:"no-cors",
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }).then((data)=>data.json())
    .then((json)=> console.log(json))
  };

  useEffect(()=>{
   let id = setTimeout(()=>{
      setSubmit(true);
    },3000)
    return ()=>{
      clearTimeout(id)
    }
  },[submit])

  return (
    <>
    <Head> 
      <title>Nikhil&apos;s Contact</title>
    </Head>
    <motion.div
     className={classes.container}
     variants={variant}
     initial="initial"
     animate="animate"
     exit="exit"
     transition={{duration:2}}
     >
      <div className={classes.formContainer}>
       <form onSubmit={handleClick} method="POST" >
         <fieldset className={classes.borderW}>
           <legend>Please provide your name, email address and a comment</legend>
           <p className={classes.formP}>
             <label className={classes.label1}  htmlFor="fname">Name:* </label>
             <input onChange={(e)=> setName(e.target.value)} type="text" id="fname" name="fname"  value={name} required style={{color:"black"}}></input>
           </p>
           <p className={classes.formP}>
             <label className={classes.label2} htmlFor="email">Email:* </label>
             <input style={{color:"black"}} value={email} onChange={(e)=> setEmail(e.target.value)}  type="text" id="email" name="email" required></input>
           </p>
           <p className={classes.formP}>
             <label className={classes.label3}  htmlFor="phone">Phone Number:* </label>
             <input style={{color:"black"}} value={phone} onChange={(e)=> setPhone(e.target.value)} type="phone" id="phone" name="phone" required></input>
           </p>
           <p className={classes.formP}>
             <label className={classes.label4} htmlFor="comment">Comment:* </label>
             <textarea style={{color:"black"}} value={comment} onChange={(e)=> setComment(e.target.value)}  className='' id="comment" name="comment" rows="4" cols="30"></textarea>
           </p>
           <p className={classes.submitP}>
           <input className={classes.submit} type="submit" value="Submit"/>
           </p>
           {!submit && <h2 className={classes.heading}>Have a great day!!!</h2>}
         </fieldset>
   
       </form>
      </div>
      <Return/>
      <Navbar/>
    </motion.div>
     </>
  )
}

export default Index