import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class AddPage extends Component {
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
        <Text style={styles.welcome}>
          This is sub page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


