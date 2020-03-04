import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import { Marker } from 'react-map-gl';

import { getId } from './getId'

import ArticleImage from './ArticleImage';
import PlaceMarkerBubble from './PlaceMarkerBubble'

export default class ArticleCard extends PureComponent {

  static propTypes = {
    place: PropTypes.arrayOf({
      id: PropTypes.number,
      link: PropTypes.string,
      title: PropTypes.string,
      coordinates: PropTypes.array,
    })
  };

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch(`https://travl.dev/api/places/${this.props.id}/`)
      .then(res => res.json())
      .then(place => {
        this.setState({
          loading: false,
          place: place.place,
        });

      })

  }

  render() {
    const { loading, place } = this.state;

    return (
      <div>
        { loading ? <a /> :

            <PlaceMarkerBubble
              longitude={place.coordinates[1]}
              latitude={place.coordinates[0]}
              title={place.title}
            />
        }

      </div>

    );
  }
}
