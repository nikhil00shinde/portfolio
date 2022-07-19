import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HomeScreen from './HomeScreen'
import Loader from './loader'


export default function Home() {

  let [loader,setLoader] = useState(true)

  useEffect(()=>{
    let id =  setTimeout(()=>{
       setLoader(false)
     },2090)
     return () => clearTimeout(id)
  },[])

  return (
    <>
    <Head>
    <title>Nikhil Shinde Home</title>
    <link rel="shortcut icon" href="/home.jpg" type="image/jpg"/>
    </Head>
    {
      loader ? <Loader/> : <HomeScreen/>
    }
    </>
  )
}
