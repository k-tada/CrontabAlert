import React, { Component } from 'react';
import Main from './Contents/Main';
import Sub from './Contents/Sub';

export default class Router extends Component {
  render() {
    switch ( this.props.route.id ) {
      case 'main': return <Main navigator={ this.props.navigator } />;
      case 'sub': return <Sub navigator={ this.props.navigator } />;
    }
  }
}
