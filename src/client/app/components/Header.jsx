import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MDSpinner from 'react-md-spinner';

import HeaderTop from './HeaderTop'
import HeaderNavigation from './HeaderNavigation'
import Cities from './CitiesNames'
import Categories from './CategoriesNames'
import ShowCities from './ShowCities'
import ShowCategories from './ShowCategories'

import '../scss/style.sass'

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      cities: [],
      loading: false,
      isActive: false,
      showCitiesLoading: false,
      showCategoriesLoading: false,
      active: false,
      showBlock: false
    };
  }

  toggleClass = () => {
    this.setState({
      isActive: false,
      showCitiesLoading: false,
      showCategoriesLoading: false,
      active: true,
      showBlock: false
    })
  }

  showSearchCities = () => {
    this.setState({
      isActive: !this.state.isActive,
      showCitiesLoading: true,
      active: this.state.isActive,
      showCategoriesLoading: false,
      showBlock: !this.state.showBlock,
    });
    fetch('https://travl.dev/api/cities/')
      .then(res => res.json())
      .then(cities => {
        this.setState({
          loading: false,
          cities: cities.cities,
        })
      })
  }

  showCategories = (url) => () => {
    this.setState({
      isActive: !this.state.isActive,
      showCategoriesLoading: true,
      showCitiesLoading: false,
      active: this.state.isActive
    });
    fetch(url)
      .then(res => res.json())
      .then(categories => {
        this.setState({
          loading: false,
          categories: categories.categories,
        })
      })
  }

  render() {
    const { loading, cities, categories, showCategories, showSearchCities, showCitiesLoading, showCategoriesLoading, toggleClass, showBlock} = this.state;

    return (
      <header className="header">
        <img className="header__picture" src='static/images/photo_main.jpg'/>
        <div className="header__top">
          <Link to="/" className="header__logo" onClick={this.toggleClass}>TRAVL</Link>
          <div className="header__top_navigation">
            <a href="#">ИЗБРАННОЕ</a>
            <a className="header__button_login" href="#">ВОЙТИ</a>
          </div>
        </div>

        <ul className="header__navigation">
          <li> <a className={this.state.showCitiesLoading===true ? "selected" : null}
            onMouseOver={this.showSearchCities}> Города </a> </li>
          <li> <NavLink to='/articles' activeClassName={this.state.active===true ? "selected" : null} exact onClick={this.toggleClass}> Статьи </NavLink> </li>
          <li> <NavLink to='/articles/1' activeClassName={this.state.active===true ? "selected" : null} exact onClick={this.toggleClass}> {`Статья 1`} </NavLink> </li>
          <li> <NavLink to='/map' activeClassName={this.state.active===true ? "selected" : null} exact onClick={this.toggleClass}> {`Места`} </NavLink> </li>
          <li> <a className={this.state.showCategoriesLoading===true ? "selected" : null}
            onMouseOver={this.showCategories('https://travl.dev/api/categories/')}> Темы </a>
          </li>
        </ul>

        <TransitionGroup component={null}>
          <CSSTransition
            in={showBlock}
            timeout={1000}
            classNames={{
              appear: 'fader-enter',
              appearActive: 'fader-enter-active',
              enter: 'fader-enter-active',
              enterActive: 'fader-enter-active',
              enterDone: 'fader-enter-active',
              exit: 'fader-exit',
              exitActive: 'fader-active-exit',
            }}
            appear
            exit
            unMountOnExit
          >
            <ShowCities toggleClass={this.toggleClass} showCitiesLoading={showCitiesLoading} cities={cities}/>
          </CSSTransition>

          <CSSTransition
            in={showBlock}
            timeout={1000}
            classNames={{
              appear: 'fader-enter',
              appearActive: 'fader-enter-active',
              enter: 'fader-enter-active',
              enterActive: 'fader-enter-active',
              enterDone: 'fader-enter-active',
              exit: 'fader-exit',
              exitActive: 'fader-active-exit',
            }}
            appear
            exit
            unMountOnExit
          >
            <ShowCategories toggleClass={this.toggleClass} showCategoriesLoading={showCategoriesLoading} categories={categories}/>
          </CSSTransition>

        </TransitionGroup>

      </header>
    );
  }
}
