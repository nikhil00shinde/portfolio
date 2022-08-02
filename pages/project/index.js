import React,{useState} from "react";
import Head from 'next/head';
import Table from "./Table"
import Return from "../skill/Return";
import About from "../skill/About";
import {motion} from "framer-motion";
import classes from "../../styles/project.module.css";


function Index(){
  const [show, set] = useState(true);
  const [isVisible,setUseVisible] = useState(false);
  
  return (
  
    <>
    <Head> 
      <title>Nikhil&apos;s Project</title>
      <link rel="shortcut icon" href="/home.jpg" type="image/jpg"/>
    </Head>
    <Table/>
    {isVisible && 
     <motion.div
     initial={{ opacity: 0,y: 50 }}
     animate={{ opacity: 1,y: 0}}
     transition={{repeatType:"reverse"}}
      className={classes.refer}>
      <p>Currently Learning Backend, my interest lie in Data Science and Development. With the development I want to create something that would be benificial to every one.</p>
     </motion.div>
     }
    < About setUseVisible={setUseVisible} isVisible={isVisible}/>
    </>

  )
}

export default Index