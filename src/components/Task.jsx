import React from 'react'
import styles from "../styles/Task/Task.module.css";
const Task = ({task}) => {
  return (
    <div className={styles.task}>
        <span>{task.name}</span>
        <span>{task.status}</span>
    </div>
  )
}

export default Task
