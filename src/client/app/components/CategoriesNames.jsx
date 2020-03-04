import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import { getId } from './getId'

export default class Categories extends Component {
  static defaultProps = {
    categories: [],
  }


  render() {
    const { categories } = this.props;
    return (
      <div className="drop_down_block__names">
        {categories.map(category =>
          <Link to={`categories/${getId(category.link)}`} key={`category_${getId(category.link)}`}>
            <ReactSVG src={`static/images/categories/${getId(category.link)}.svg`}/>
          </Link>)}
      </div>
    );
  }
}
