import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import Temperature from './components/Temperature/Temperature';
import CityPicker from './components/CityPicker/CityPicker';

import { fetchTemperature } from './api'
class App extends Component {
  state = { 
    data : {},
    city :'',
    celsius : true
   }
  handleSubmit=(event)=>{
    event.preventDefault();
  }

  handleInput = (city) =>{
    if(city===''){
      this.setState({data : {}})
    }
    this.setState({city})
  }

  getWeather = async (city) => {
    const fetchData = await fetchTemperature(city);
    this.setState({data : fetchData})
    this.setState({celsius : true})


  }
  handleCelsius = () =>{
    this.setState({celsius : true})
  }
  handleFarenheit = () => {
    this.setState({celsius : false})
  }
  render() { 
    return (
      <div className={styles.container}>
          <div className={styles.temperature}>
          
            <Temperature data={this.state.data} celsius={this.state.celsius} handleCelsius={this.handleCelsius} handleFarenheit={this.handleFarenheit}/>
            <CityPicker city={this.state.city} handleSubmit={this.getWeather} handleInput={this.handleInput}/>
          </div>
      </div>
     );
  }
}
 
export default App;
