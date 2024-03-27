import React from 'react'
import styles from "../styles/Card/Card.module.css";
import { useSelector } from 'react-redux';
import { taskSelector } from '../Redux/taskReducer';
import Task from './Task';
const Card = ({status}) => {
    const style = {
        boxShadow: `4px 4px ${status.color}`,
        
    }

    const {tasks} = useSelector(taskSelector);
    const filteredTasks = tasks.filter(task => task.status === status.name.toLowerCase());
    console.log(filteredTasks);
  return (
    <div className={styles.card} style={style}>   
        <div className={styles.heading} style={{borderBottom: `1px solid ${status.color}`}}>
            <span>{status.name}</span>
        </div>
        <div className={styles.main}>
          {filteredTasks.map(item=>(
            <Task task={item}/>
          ))}
        </div>
    </div>
  )
}

export default Card
