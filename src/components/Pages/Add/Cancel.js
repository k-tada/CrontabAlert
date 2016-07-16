import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';

export default class Cancel extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TextWithPrompt>
          <TouchableHighlight onPress={ this.props.navigator.pop }>
            <Text style={ styles.text } >tap here to cancel...</Text>
          </TouchableHighlight>
        </TextWithPrompt>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

