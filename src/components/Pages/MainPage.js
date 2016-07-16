import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import AddArea from './Main/AddArea';

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
        <View style={ styles.titleArea }>
          <Text style={ styles.titleText }>Crontab Alert</Text>
        </View>
        <AddArea navigator={ this.props.navigator } />
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
  titleArea: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'limegreen',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'limegreen',
  },
});

