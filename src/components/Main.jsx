import React from 'react'
import styles from "../styles/Main/Main.module.css";
import Button from './Button';
const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <div className={styles.heading}>
                <span>TaskMaster</span>
            </div>
            <div className={styles.addTask}>
                <Button text={"Add Task"}/>
            </div>
        </div>
    </div>
  )
}

export default Main
