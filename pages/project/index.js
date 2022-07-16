import React,{useState} from "react";
import Head from 'next/head';
import Table from "./Table"
import Return from "../skill/Return";



function Index(){
  const [show, set] = useState(true);
  
  return (
  
    <>
    <Head> 
      <title>Nikhil&apos;s Project</title>
    </Head>
    <Table/>
    <Return/>
    </>

  )
}

export default Index