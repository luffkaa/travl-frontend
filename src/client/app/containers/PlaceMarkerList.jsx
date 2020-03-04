import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MDSpinner from 'react-md-spinner';

import PlaceMarker from '../components/PlaceMarker';


export default class PlaceMarkerContainer extends Component {
  static propTypes = {
    places: PropTypes.arrayOf({
      link: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      modified: PropTypes.string.isRequired,
    })
  };

  static defaultProps = {
    places: [],
  }

  render() {
    const { places } = this.props;
    return (
      <div>
        { places.map(place => <PlaceMarker {...place} />) }
      </div>

    );
  }
}
