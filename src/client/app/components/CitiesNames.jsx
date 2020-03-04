import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getId } from './getId'

export default class Cities extends Component {
  static defaultProps = {
    cities: [],
  }


  render() {
    const { cities } = this.props;
    return (
      <div className="drop_down_block__names">
        {cities.map(city =>
          <Link to={`cities/${getId(city.link)}`} key={`city_${getId(city.link)}`}>
            {city.area}
          </Link>)}
      </div>
    );
  }
}
