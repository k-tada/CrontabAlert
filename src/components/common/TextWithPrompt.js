import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TextWithPrompt extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.prompt }>crontab-alert$ </Text>
        <View style={ styles.command }>
          { this.props.children }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  prompt: {
    flex: 2,
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
    paddingLeft: 3,
  },
  command: {
    flex: 3,
  }
})

