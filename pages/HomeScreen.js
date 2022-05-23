import React from 'react';
import styles from "../styles/Home.module.css";
import HomeSection from './HomeSection';
import { HomeSectionName } from '../constants/constant';

function HomeScreen() {
  return (
    <div className={styles.container_wrap}>
      {
      HomeSectionName?.map((val,ind)=>(
        <HomeSection val={val} key={val.name}/>
      ))
      }
    </div>
  )
}

export default HomeScreen