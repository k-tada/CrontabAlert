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
              LeftButton ( route, navigator, index, navState ) {
                return (
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center' }}
                    onPress={ () => navigator.parentNavigator.pop() }
                  >
                  <Text style={{ color: 'black', margin: 10 }}>Back</Text>
                  </TouchableOpacity>
                );
              },
              RightButton ( route, navigator, index, navState ) {
                return null;
              },
              Title ( route, navigator, index, navState ) {
                return (
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Text style={{ color: 'black', margin: 10 }}>Sub</Text>
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
          This is sub page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


