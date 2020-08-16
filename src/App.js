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
    city :'Mumbai',
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
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">Temperature</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a class="nav-link" href="!#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="!#">Features</a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="!#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="!#">About</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles.temperature}>
          
            <Temperature data={this.state.data} celsius={this.state.celsius} handleCelsius={this.handleCelsius} handleFarenheit={this.handleFarenheit}/>
            <CityPicker city={this.state.city} handleSubmit={this.getWeather} handleInput={this.handleInput}/>
          </div>
      </div>
     );
  }
}
 
export default App;
