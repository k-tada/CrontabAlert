import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import sharedStyles from '../sharedStyles';
import AlertList from './AlertList';

export default class AlertListArea extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.title }>
          <Text style={ styles.prompt }>crontab-alert$ </Text>
          <Text style={ styles.titleText } >./alert-list</Text>
        </View>
        <AlertList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...sharedStyles,
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    alignSelf: 'stretch',
    height: 40,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  titleText: {
    flex: 3,
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

