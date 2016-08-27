import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Title from '../common/Title';
import Contents from './Edit/Contents';
import Cancel from './Edit/Cancel';

export default class EditPage extends Component {
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
      <View style={styles.container}>
        <Title />
        <Contents />
        <Cancel navigator={ this.props.navigator } />
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


