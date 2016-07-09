import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <Navigator
        renderScene={ this.renderScene.bind(this) }
        navigator={ this.props.navigator }
        navigationBar={
          <Navigator.NavigationBar
            style={{ backgroundColor: '#ddd' }}
            routeMapper={{
              LeftButton: ( route, navigator, index, navState ) => {
                return null
              },
              RightButton: ( route, navigator, index, navState ) => {
                return null;
              },
              Title: ( route, navigator, index, navState ) => {
                return (
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Text style={{ color: 'black', margin: 10 }}>Main</Text>
                  </TouchableOpacity>
                );
              }
            }}
          />
        }
      />
    );
  }

  renderScene( route, navigator ) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! bbb
        </Text>
        <TouchableHighlight onPress={ this.gotoSub.bind(this) }>
          <Text style={{color: 'blue'}} >Goto Sub</Text>
        </TouchableHighlight>
      </View>
    );
  }

  gotoSub() {
    this.props.navigator.push({ id: 'sub' });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

