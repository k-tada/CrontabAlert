import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import sharedStyles from '../sharedStyles';

export default class Help extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.hint }>
          <Text style={ styles.hintText } >  (Hint: you can scroll alert list)</Text>
        </View>
        <View style={ styles.title }>
          <Text style={ styles.prompt }>crontab-alert$ </Text>
          <Text style={ styles.titleText } >./alert-list --help</Text>
        </View>
        <View style={ styles.help }>
          <View style={ styles.row }>
            <Text style={ styles.left }>usage:</Text>
            <Text style={ styles.right }>tap alert to edit</Text>
          </View>
          <View style={ styles.row }>
            <Text style={ styles.left }></Text>
            <Text style={ styles.right }>press and hold alert to toggle on/off</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...sharedStyles,
  container: {
    height: 160,
    alignSelf: 'stretch',
  },
  hint: {
    height: 32,
    padding: 5,
  },
  hintText: {
    textAlign: 'left',
    fontSize: 18,
    color: 'limegreen',
  },
  title: {
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
  help: {
    height: 80,
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    color: 'limegreen',
  },
  right: {
    flex: 5,
    textAlign: 'left',
    fontSize: 18,
    color: 'limegreen',
  },
});

