import React, { Component } from 'react';
import axios from 'axios';
import Quakes from './components/Quakes';
import Map from './components/Map';

class App extends Component {
  state = {
    earthquakes: []
  }

  componentDidMount = () => {
    axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson")
      .then(response => {
        console.log(response);
        // features = response.data.features;

        this.setState({
          earthquakes: response.data.features
        })
        console.log(this.state)
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Map earthquakes={this.state.earthquakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
