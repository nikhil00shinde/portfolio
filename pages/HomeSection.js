import React from 'react'
import styles from "../styles/HomeSection.module.css"
import Link from 'next/link';
// @refresh reset

function HomeSection({val}) {
  return (
    <Link href="/project">
    <div className={styles.section} >
        <iframe className={styles.sectionBackground} scrolling="no" src=''></iframe>
        <h2 className={`${styles.sectionHeading} ${styles[val.class]}`} style={val.pos}>{val.name}</h2> 
     </div>
    </Link>
   
  )
}

export default HomeSection