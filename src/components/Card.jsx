import React, { useEffect } from 'react'
import styles from "../styles/Card/Card.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { actions, taskSelector } from '../Redux/taskReducer';
import Task from './Task';
const Card = ({status}) => {
    const style = {
        boxShadow: `4px 4px ${status.color}`,
        
    }
    const {filteredTask} = useSelector(taskSelector);
    
    const filteredTasks = filteredTask.filter(task => task.status === status.name.toLowerCase());
    
  return (
    <div className={styles.card} style={style}>   
        <div className={styles.heading} style={{borderBottom: `1px solid ${status.color}`}}>
            <span>{status.name}</span>
        </div>
        <div className={styles.main}>
          {filteredTasks.map(item=>(
            <Task task={item} color={status.color}/>
          ))}
        </div>
    </div>
  )
}

export default Card
