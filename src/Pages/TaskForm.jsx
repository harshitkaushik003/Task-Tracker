import React, { useEffect, useState } from 'react'
import styles from "../styles/TaskForm/TaskForm.module.css";
import cross from "../images/cross.png";
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
const TaskForm = () => {
    const [style, setStyle] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        setStyle({transform: "scale(1)"});

    }, [])

    function handleBack(){
        setStyle({transform: "scale(0)"});
        setTimeout(()=>{
            navigate('/')
        }, 100);
    }
  return (
    <div className={styles.form} style={style}>
        <div className={styles.btns}> 
            <div className={styles.close} onClick={handleBack}>
                <img src={cross} alt="" />
            </div>
            <span>Add Task</span>
        </div>
        <div className={styles.formMain}>
            <Form/>
        </div>
        <div className={styles.submit}></div>
    </div>
  )
}

export default TaskForm
