import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Router from './Router';

export default class Main extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'main' }}
        renderScene={ (route, navigator) => <Router route={ route } navigator={navigator} /> }
      />
    );
  }
}
