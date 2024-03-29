import React from 'react'
import styles from "../styles/Filters/Filter.module.css";

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import date from "../images/date.png";


const Filters = () => {


  return (
    <div className={styles.main}>
      <div className={styles.filters}>
        <div className={styles.heading}>
            <span>Filter By: </span>
        </div>
        <div className={styles.filtersMain}>
            <input type="text" placeholder='Asignee name'/>
            <select name="priority" id="">
                <option value={null} disabled selected>Priority</option>
                <option value="p0">P0</option>
                <option value="p1">P1</option>
                <option value="p2">P2</option>
            </select>
            <div className={styles.date}>
                <img src={date} alt="" />
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />
            </div>
        </div>
      </div>
      <div className={styles.sort}></div>
    </div>
  )
}

export default Filters
