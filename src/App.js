import React, { useState } from "react";
import axios from "axios";

function App() {
  
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=026127dbef7d29041239c96211e6bd04
  // `

  

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Bangalore</p>
          </div>
          <div className="temp">
            <h1>25°C </h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">30°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">68%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
