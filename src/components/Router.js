import React, { Component } from 'react';
import MainPage from './Pages/MainPage';
import AddPage from './Pages/AddPage';

export default class Router extends Component {
  render() {
    switch ( this.props.route.id ) {
      case 'main': return <MainPage navigator={ this.props.navigator } />;
      case 'add': return <AddPage navigator={ this.props.navigator } />;
    }
  }
}
