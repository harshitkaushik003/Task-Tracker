import React, { useEffect, useRef } from 'react'
import styles from "../styles/Filters/Filter.module.css";

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import date from "../images/date.png";
import { useDispatch } from 'react-redux';
import { actions } from '../Redux/taskReducer';


const Filters = () => {
  const dispatch = useDispatch();



  const aRef = useRef(null);
  const pRef = useRef(null);
  const sdRef = useRef(null);
  const edRef = useRef(null);


  function handleChange(){
    const filterCriteria = {
      assigneeName : (aRef && aRef !== '') ? aRef.current.value : null,
      priority : pRef ? pRef.current.value : null,
      startDate : sdRef ? sdRef.current.value : null,
      endDate : edRef ? edRef.current.value : null
    }

    dispatch(actions.filterTask(filterCriteria));
  }

  function handleReset(){
    aRef.current.value = null;
    pRef.current.value = null;
    sdRef.current.value = null;
    edRef.current.value = null;

    dispatch(actions.resetFilter());
  }

  return (
    <div className={styles.main}>
      <div className={styles.filters}>
        <div className={styles.heading}>
            <span>Filter By: </span>
        </div>
        <div className={styles.filtersMain}>
            <input ref={aRef} type="text" placeholder='Asignee name' onChange={handleChange}/>
            <select ref={pRef} name="priority" id="" onChange={handleChange}>
                <option value='' disabled>Priority</option>
                <option value="p0">P0</option>
                <option value="p1">P1</option>
                <option value="p2">P2</option>
            </select>
            <div className={styles.date}>
                <img src={date} alt="" />
                <input ref={sdRef} type="date" name="" id="" onChange={handleChange}/>
                <input ref={edRef} type="date" name="" id="" onChange={handleChange}/>
            </div>
            <button onClick={handleReset}>Reset Filters</button>
        </div>
      </div>
      <div className={styles.sort}></div>
    </div>
  )
}

export default Filters
