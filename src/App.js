import React, { useState } from "react";
import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=026127dbef7d29041239c96211e6bd04
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
            <p>Cloudy with a chance of rain.</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels like 30°C</p>
          </div>
          <div className="humidity">
            <p>Humidity: 68%</p>
          </div>
          <div className="wind">12 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
