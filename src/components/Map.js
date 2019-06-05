import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
      const quakes = this.props.earthquakes.map((quake, key) => {
        return <Marker key={key} position={{lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]}} />
      });
    return (
      <div className="map-wrap">
        <Map google={this.props.google} zoom={1} style={{ width: '40%', height: '80%'}}>
        {/* <Marker onClick={this.onMarkerClick} name={"Current location"} /> */}
        {quakes}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer);




"AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";