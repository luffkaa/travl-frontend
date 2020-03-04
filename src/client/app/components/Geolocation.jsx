import React, { Component } from 'react';

export default class Geoloc extends Component {
  showGeo = () => {
    console.log(this.props.isGeolocationAvailable)
  }


  render() {

    return (
      !this.props.isGeolocationAvailable
      ? <div onMouseOver={this.showGeo}>Your browser does not support Geolocation </div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>)
  }
}
