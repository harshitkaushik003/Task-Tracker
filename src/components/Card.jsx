import React from 'react'
import styles from "../styles/Card/Card.module.css";
const Card = ({status}) => {
    const style = {
        boxShadow: `4px 4px ${status.color}`
    }
  return (
    <div className={styles.card} style={style}>   
        <div className={styles.heading}>
            <span>{status.name}</span>
        </div>
        <div className={styles.main}></div>
    </div>
  )
}

export default Card
