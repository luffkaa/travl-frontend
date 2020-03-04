import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';
import { geolocated } from "react-geolocated"
import ReactMapGL, { GeolocateControl, NavigationControl, Marker } from 'react-map-gl';

import MainArticlesList from './MainArticlesList'
import PlaceMarkerList from './PlaceMarkerList'


const MAPBOX_TOKEN = 'pk.eyJ1IjoibHl1Ym92IiwiYSI6ImNqeHEzN3B0cDBtYzYzaHA3Z3FobTN3NWgifQ.ZqX5fDxZ0NJKxX9iAkufaw';

const MAPBOX_STYLE="mapbox://styles/lyubov/cjymrcs9x2zps1cmurci71x89";

const controlPanelStyle= {
  position: 'absolute',
  top: '10px',
  right: '20px'
}

export default class MapContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      loading: false,
      setCurrentLocation: false,
      viewport: {
        width:"100vw",
        height: 573,
        latitude: 55.7522200,
        longitude: 37.6155600,
        zoom: 1,

      },
    };
  }

  componentWillMount() {
    this.setState({
      loading: true,
      setCurrentLocation: false,
    });

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude

        console.log('currentLatitude ' + currentLatitude + ' currentLongitude ' + currentLongitude);
        this.setState ({
          setCurrentLocation: true,
          viewport: {
            width:"100vw",
            height: 573,
            latitude: currentLatitude,
            longitude: currentLongitude,
            zoom: 10,
          },
        })
      });
    } else {
      console.log('no')
    }

    fetch(`https://travl.dev/api/places/ `)
      .then(res => res.json())
      .then(places => {
        this.setState({
          loading: false,
          places: places.places
        }),
      console.log(places)
      })
  }

  render() {
    const { loading, setCurrentLocation, showCurrentLocation, viewport, places } = this.state;

    return (
      <div>
        { loading ? <MDSpinner /> :
          <ReactMapGL
            mapboxApiAccessToken={MAPBOX_TOKEN}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapStyle={MAPBOX_STYLE}
          >
            <GeolocateControl
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
              showUserLocation={true}
              fitBoundsOptions={{maxZoom: 10}}
              setCurrentLocation={false}
              onClick = {this.showCurrentLocation}
            />

            <NavigationControl/>
            <div>
              { loading ? <MDSpinner /> : <PlaceMarkerList places={places}/>}
            </div>
          </ReactMapGL>
        }
      </div>

    );
  }
}
