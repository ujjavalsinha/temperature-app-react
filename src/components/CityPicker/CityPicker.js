import React, {useState,useEffect} from 'react'
import styles from './CityPicker.module.css'

const CityPicker = ({handleSubmit, handleInput, city }) =>{

    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" value={city} onChange={e=>handleInput(e.target.value)} />
            <br></br>
            <a className={styles.submit} type="submit" value="Submit" onClick={()=>handleSubmit(city)}>Check</a>
        </div>
    )
}

export default CityPicker;