import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Articles from './containers/ArticlesListContainer';
import MainArticles from './containers/MainArticlesContainer';
import ArticleContainer from './containers/ArticleContainer';
import PlaceContainer from './containers/PlaceContainer';
import MapContainer from './containers/MapContainer'

export default class App extends Component {

  render() {
    return (
      <div className="body">
        <Header />
        <main className="">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/articles" component={MainArticles} />
            <Route path="/articles/1" component={ArticleContainer} />
            <Route path="/map" component={MapContainer} />
            <Route path="/places/:id/" component={PlaceContainer} />
            <Route path="/categories/:id/" component={PlaceContainer} />
            <Route path="/articles/:id" component={ArticleContainer} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
