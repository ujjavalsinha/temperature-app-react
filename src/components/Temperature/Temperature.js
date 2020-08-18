import React, { useState , useEffect } from 'react';
import styles from './Temperature.module.css';
import { fetchTemperature } from '../../api'
const Temperature= ({ data, celsius,handleCelsius, handleFarenheit} ) =>{
    const flag = 0
    console.log("Outside of effect function")
    console.log(celsius)
    const tempView = (
        data.main ?
            celsius===true ?
                <div className={styles.tempvalue}>
                    <h1>{Number((data.main.temp-273).toFixed(2))}  °C</h1>
                    <img>{data.weather.icon}</img>
                </div> 
                    :
                <div className={styles.tempvalue}>
                    <h1>{Number((((data.main.temp-273)*9/5)+32).toFixed(2))} °F</h1>
                    <img>{data.weather.icon3}</img>
                </div>
                
        : 
        <div className={styles.nocity}>
            <h1>Enter City Name</h1>
        </div>)
    
    const changeCelsiusClass = () => {
        let buttonClass="btn btn-"
        if(celsius===true){
            buttonClass+= "dark"
        }
        else{
            buttonClass+='white'
        }
        return buttonClass
    }
    const changeFarenheitClass = () => {
        let buttonClass="btn btn-"
        if(celsius===false){
            buttonClass+= "dark"
        }
        else{
            buttonClass+='white'
        }
        return buttonClass
    }
    return (
        <div className={styles.container}>
            {tempView}
            
            <button type="button" className={changeCelsiusClass()} onClick={()=>handleCelsius()}>Celsius</button>
            <button type="button" className={changeFarenheitClass()} onClick={()=>handleFarenheit()}>Farenheit</button>
        </div>
    )
}
  


export default Temperature;