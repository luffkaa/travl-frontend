import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

import Categories from './CategoriesNames'

export default class ShowCategories extends Component {

  render() {
    const { loading, categories, showCategoriesLoading, toggleClass } = this.props;
    return (
          <div onMouseLeave={toggleClass} className={showCategoriesLoading===true ? "header__drop_down_block" : "header__drop_down_block_hidden"}>
            <div className="drop_down_block_holder">
              { loading ? <MDSpinner /> : <Categories categories={ categories } /> }
            </div>
          </div>
    );
  }
}
