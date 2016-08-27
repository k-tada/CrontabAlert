import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';
import Form from './Form';

export default class Edit extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TextWithPrompt>
          <Text style={ styles.title }>./edit-alert</Text>
        </TextWithPrompt>
        <Form { ...this.props } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
});


