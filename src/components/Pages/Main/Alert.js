import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Alert extends Component {
  render() {
    const state = this.props.state ? 'ON' : 'OFF';
    return (
      <TouchableHighlight onPress={ this.gotoEditPage.bind(this) }>
        <View style={ styles.container }>
          <Text style={ styles.name }>{ this.props.name }</Text>
          <Text style={ styles.cron }>{ this.props.cron }</Text>
          <Text style={[ styles.state, styles[ `state${ state }` ] ]}>{ state }</Text>
        </View>
      </TouchableHighlight>
    );
  }

  gotoEditPage() {
    this.props.navigator.push({ id: 'edit' });
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    alignSelf: 'stretch',
    height: 40,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  name: {
    flex: 2,
    textAlign: 'left',
    color: 'limegreen',
    fontSize: 18,
  },
  cron: {
    flex: 4,
    textAlign: 'left',
    fontSize: 18,
    color: 'limegreen',
  },
  state: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
  },
  stateON: {
    color: 'limegreen',
  },
  stateOFF: {
    color: 'red',
  },
});

