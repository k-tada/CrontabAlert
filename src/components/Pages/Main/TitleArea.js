import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TitleArea extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Crontab Alert</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'limegreen',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: 'limegreen',
  },
});

