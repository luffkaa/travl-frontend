import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import { Marker } from 'react-map-gl';

import { getId } from './getId'


export default class PlaceMarkerBubble extends PureComponent {


  render() {
    const { longitude, latitude, title  } = this.props;

    return (
      <Marker
        longitude={longitude}
        latitude={latitude}
        className="marker_style">
      </Marker>

    );
  }
}
