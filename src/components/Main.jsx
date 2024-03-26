import React from 'react'
import styles from "../styles/Main/Main.module.css";
import Button from './Button';
import { status } from '../app/data';
import Card from './Card';
const Main = () => {
  console.log(status.length)
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
        <div className={styles.tasks}>
          
            {status.map(item=>(
              <Card status={item}/>
              
            ))}
        </div>
    </div>
  )
}

export default Main
