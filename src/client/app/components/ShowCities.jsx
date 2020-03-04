import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

import Cities from './CitiesNames'

export default class ShowCities extends Component {

  render() {
    const { loading, cities, showCitiesLoading, toggleClass } = this.props;
    return (
          <div onMouseLeave={toggleClass} className={showCitiesLoading===true ? "header__drop_down_block" : "header__drop_down_block_hidden"}>
            <div className="drop_down_block_holder searching_holder">
              <input type="text" placeholder=" &#xe8b6; исследуйте город"></input>
              { loading ? <MDSpinner /> : <Cities cities={ cities } /> }
            </div>
          </div>
    );
  }
}
