import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';
import Form from './Form';

export default class Add extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TextWithPrompt>
          <Text style={ styles.title }>./add-alert</Text>
        </TextWithPrompt>
        <Form navigator={ this.props.navigator } />
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


