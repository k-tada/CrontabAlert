import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';

export default class Help extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TextWithPrompt>
          <Text style={ styles.titleText } >./alert-list --help</Text>
        </TextWithPrompt>
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
  container: {
    height: 120,
    alignSelf: 'stretch',
  },
  titleText: {
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

