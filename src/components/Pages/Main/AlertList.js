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
    // TODO: 仮
    // const alertList = [
    //   {
    //     name: '仕事',
    //     cron: '45-55/5 8 * * 1-5',
    //     state: true,
    //   },
    //   {
    //     name: '仕事2',
    //     cron: '00-15/5 9 * * 1-5',
    //     state: true,
    //   },
    //   {
    //     name: '勉強会',
    //     cron: '00 16 * * 5',
    //     state: false,
    //   },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    //   { name: '勉強会', cron: '00 16 * * 5', state: false, },
    // ];

    // const alertListView = alertList.map( ( alert, i ) => {
    const alertListView = alerts.map( ( alert, i ) => {
      return <Alert key={ `alert${i}` } navigator={ this.props.navigator } { ...alert } />;
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

