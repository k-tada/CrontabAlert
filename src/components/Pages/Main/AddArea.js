import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import sharedStyles from '../sharedStyles';

export default class AddArea extends Component {
  render() {
    return (
      <View style={ styles.addLinkArea }>
        <Text style={ styles.prompt }>crontab-alert$ </Text>
        <TouchableHighlight onPress={ this.gotoAddPage.bind(this) } style={ styles.addLink }>
          <Text style={ styles.addLinkText } >tap here to add alert...</Text>
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
  addLinkArea: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  addLink: {
    flex: 3,
  },
  addLinkText: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

