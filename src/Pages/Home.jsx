import React from 'react'
import styles from "../styles/Home/Home.module.css";
import myImage from "../images/filter.png";
import Main from "../components/Main";
const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.left}>
            <div className={styles.image}>
                <img src={myImage} alt="" />
            </div>
            <div className={styles.filters}>

            </div>
        </div>
        <div className={styles.right}>
            <Main/>
        </div>
    </div>
  )
}

export default Home
