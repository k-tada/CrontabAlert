import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Alert from './Alert';
import realm from '../../../utils/realm.js';

export default class AlertList extends Component {
  render() {
    const alerts = realm.objects( 'Alerts' );
    const alertListView = alerts.map( ( alert, i ) => {
      console.log( alert );
      return <Alert key={ `alert${i}` } navigator={ this.props.navigator } id={ alert.alertId } />;
    });

    return (
      <View style={ styles.container }>
      <ScrollView
        automaticallyAdjustContentInsets={ false }
        scrollEventThrottle={ 100 }
        style={ styles.scroll }
      >
        { alertListView }
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 20,
  },
  scroll: {
    flex: 1,
    alignSelf: 'stretch',
  }
});

