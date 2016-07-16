import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Navigator,
} from 'react-native';
import Title from '../common/Title';
import Add from './Main/Add';
import AlertListArea from './Main/AlertListArea';
import Help from './Main/Help';

export default class MainPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={ this.renderScene.bind(this) }
        navigator={ this.props.navigator }
      />
    );
  }

  renderScene( route, navigator ) {
    return (
      <View style={ styles.container }>
        <Title />
        <Add navigator={ this.props.navigator } />
        <AlertListArea />
        <Help />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

