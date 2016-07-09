import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/components/Main';
import configureStore from './src/utils/redux';
import { initial } from './src/reducers';

const store = configureStore( initial );

class comicCalendar extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('comicCalendar', () => comicCalendar);
