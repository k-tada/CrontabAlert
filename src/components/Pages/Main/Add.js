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
          <Text style={ styles.text } >tap here to add alert...</Text>
        </TouchableHighlight>
      </TextWithPrompt>
    );
  }

  gotoAddPage() {
    this.props.navigator.push({ id: 'add' });
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});

