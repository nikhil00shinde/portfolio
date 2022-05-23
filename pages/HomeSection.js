import React from 'react'
import styles from "../styles/HomeSection.module.css"
// @refresh reset

function HomeSection({val}) {
  return (
    <div className={styles.section}>
      <iframe className={styles.sectionBackground} scrolling='no' src=''></iframe>
      <h2 className={`${styles.sectionHeading} ${styles[val.class]}`} style={val.pos}>{val.name}</h2>
    </div>
  )
}

export default HomeSection