import React from 'react'
import styles from "../styles/Form/Form.module.css";
const Form = () => {
  return (
    <div className={styles.Form}>
        <div className={styles.left}>
            <input type="text" placeholder='Enter Task Name...'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description'></textarea>
        </div>
        <div className={styles.right}>
            <label htmlFor="status">Status</label>
            <select name="status" id={styles.status} className={styles.dropdown}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Completed</option>
                <option value="pending">Deployed</option>
                <option value="pending">Deferred</option>
            </select>

            <label htmlFor="priority">Priority</label>
            <select name="priority" id={styles.priority} className={styles.dropdown}>
                <option value="p0">P0</option>
                <option value="p1">P1</option>
                <option value="p2">P2</option>
            </select>

            <button className={styles.button}>add task</button>
        </div>
    </div>
  )
}

export default Form
