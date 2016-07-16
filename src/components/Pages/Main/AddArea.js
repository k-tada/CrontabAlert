import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import sharedStyles from '../sharedStyles';

export default class AddArea extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.prompt }>crontab-alert$ </Text>
        <TouchableHighlight style={ styles.link } onPress={ this.gotoAddPage.bind(this) }>
          <Text style={ styles.text } >tap here to add alert...</Text>
        </TouchableHighlight>
      </View>
    );
  }

  gotoAddPage() {
    this.props.navigator.push({ id: 'add' });
  }
}

const styles = StyleSheet.create({
  ...sharedStyles,
  container: {
    height: 40,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  link: {
    flex: 3,
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

