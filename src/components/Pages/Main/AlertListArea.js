import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';
import AlertList from './AlertList';

export default class AlertListArea extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TextWithPrompt>
          <Text style={ styles.titleText } >./alert-list</Text>
        </TextWithPrompt>
        <AlertList navigator={ this.props.navigator } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  titleText: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

