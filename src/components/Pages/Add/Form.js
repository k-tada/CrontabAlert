import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import TextWithPrompt from '../../common/TextWithPrompt';
import realm from '../../../utils/realm';

export default class Form extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      name: '',
      cron: '',
    };
  }
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.row }>
          <View style={ styles.label }>
            <Text style={ styles.labelText }>Name:</Text>
          </View>
          <View style={ styles.form }>
            <TextInput
              style={ styles.input }
              placeholder={ 'Input name here...' }
              placeholderTextColor={ 'green' }
              returnKeyType='next'
              onChangeText={ name => this.setState({ name }) }
              value={ this.state.name }
            />
          </View>
        </View>
        <View style={ styles.row }>
          <View style={ styles.label }>
            <Text style={ styles.labelText }>Cron:</Text>
          </View>
          <View style={ styles.form }>
            <TextInput
              style={ styles.input }
              placeholder={ 'Input cron job here...' }
              placeholderTextColor={ 'green' }
              returnKeyType='send'
              onChangeText={ cron => this.setState({ cron }) }
              value={ this.state.cron }
            />
          </View>
        </View>
        <View style={ styles.row }>
          <View style={ styles.label }>
            <Text style={ styles.labelText }></Text>
          </View>
          <View style={ styles.hint }>
            <Text style={[ styles.labelText, styles.hintText ]}>ex) 0 8-10 * * 1-5 </Text>
          </View>
        </View>
        <View style={ styles.row }>
          <View style={ styles.label }>
            <TouchableHighlight onPress={ this.addAlert.bind(this) }>
              <Text style={ styles.labelText }>Tap here to add alert</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  addAlert() {
    const { name, cron } = this.state;
    realm.write( () => {
      realm.create( 'Alerts', { name, cron } );
    });
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 10,
  },
  row: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
  },
  labelText: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  },
  form: {
    flex: 4,
    flexDirection: 'row',
    height: 40,
    margin: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 24,
    color: 'limegreen',
  },
  hint: {
    flex: 4,
    margin: 10,
    marginRight: 20,
  },
  hintText: {
    fontSize: 18,
  }
});

