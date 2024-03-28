import React, { useRef } from 'react'
import styles from "../styles/Form/Form.module.css";
import { useDispatch } from 'react-redux';
import { actions } from '../Redux/taskReducer';
const Form = () => {
    const dispatch = useDispatch();

    const nameRef = useRef();
    const descRef = useRef();
    const anameRef = useRef();
    const pref = useRef();

    const resetForm = ()=>{
        nameRef.current.value = '';
        descRef.current.value = '';
        anameRef.current.value = '';
        pref.current.value = '';
    }

    const handleSubmit = ()=>{
        
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        
        const ID = (Date.now()).toString();
        
        const task = {
            id: ID,
            name: nameRef.current.value,
            desc: descRef.current.value,
            assignee: anameRef.current.value,
            priority: pref.current.value,
            status: 'pending',
            startDate: formattedDate,
            endDate: null,
        }
        console.log(task);
        resetForm();
        dispatch(actions.add(task));
    }

  return (
    <div className={styles.Form}>
        
        <div className={styles.left}>
            <input type="text" placeholder='Enter Task Name...' ref={nameRef} required/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description' ref={descRef} required></textarea>
        </div>
        <div className={styles.right}>
            <label htmlFor="aname">Enter Assignee Name</label>
            <input type="text" name='aname' placeholder='Full Name' ref={anameRef} required/>
            {/* <label htmlFor="status">Status</label>
            <select name="status" id={styles.status} className={styles.dropdown}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Completed</option>
                <option value="pending">Deployed</option>
                <option value="pending">Deferred</option>
            </select> */}

            <label htmlFor="priority">Priority</label>
            <select name="priority" id={styles.priority} className={styles.dropdown} ref={pref}>
                <option value="p0">P0</option>
                <option value="p1">P1</option>
                <option value="p2">P2</option>
            </select>

            <button className={styles.button} onClick={handleSubmit}>add task</button>
        </div>
    </div>
  )
}

export default Form
