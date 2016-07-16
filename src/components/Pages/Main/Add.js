import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';

export default class Add extends Component {
  render() {
    return (
      <TextWithPrompt>
        <TouchableHighlight onPress={ this.gotoAddPage.bind(this) }>
          <Text style={ styles.text } >./add-alert</Text>
        </TouchableHighlight>
      </TextWithPrompt>
    );
  }

  gotoAddPage() {
    this.props.navigator.push({ id: 'add' });
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

