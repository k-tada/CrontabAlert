import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import realm from '../../../utils/realm';

export default class Alert extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      alert: realm.objectForPrimaryKey( 'Alerts', this.props.id )
    };
  }

  render() {
    const state = this.state.alert.state ? 'ON' : 'OFF';
    return (
      <TouchableWithoutFeedback
        onPress={ this.gotoEditPage.bind(this) }
        onLongPress={ this.toggle.bind(this) }
      >
        <View style={ styles.container }>
          <Text style={ styles.name }>{ this.state.alert.name }</Text>
          <Text style={ styles.cron }>{ this.state.alert.cron }</Text>
          <Text style={[ styles.state, styles[ `state${ state }` ] ]}>{ state }</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  toggle() {
    realm.write( () => {
      this.state.alert.state = !this.state.alert.state;
    });
    this.setState({ alert: this.state.alert });
  }

  gotoEditPage() {
    this.props.navigator.push({ id: 'edit', params: { id: this.props.id } });
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    alignSelf: 'stretch',
    height: 40,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  name: {
    flex: 2,
    textAlign: 'left',
    color: 'limegreen',
    fontSize: 18,
  },
  cron: {
    flex: 4,
    textAlign: 'left',
    fontSize: 18,
    color: 'limegreen',
  },
  state: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
  },
  stateON: {
    color: 'limegreen',
  },
  stateOFF: {
    color: 'red',
  },
});

