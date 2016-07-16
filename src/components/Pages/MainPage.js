import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={ this.renderScene.bind(this) }
        navigator={ this.props.navigator }
      />
    );
  }

  renderScene( route, navigator ) {
    return (
      <View style={ styles.container }>
        <View style={ styles.titleArea }>
          <Text style={ styles.titleText }>Crontab Alert</Text>
        </View>
        <View style={ styles.addLinkArea }>
          <Text style={ styles.prompt }>crontab-alert$ </Text>
          <TouchableHighlight onPress={ this.gotoAddPage.bind(this) } style={ styles.addLink }>
            <Text style={ styles.addLinkText } >tap here to add alert...</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  gotoAddPage() {
    this.props.navigator.push({ id: 'add' });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  prompt: {
    flex: 2,
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
    paddingLeft: 3,
  },
  titleArea: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'limegreen',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'limegreen',
  },
  addLinkArea: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  addLink: {
    flex: 3,
  },
  addLinkText: {
    fontSize: 24,
    textAlign: 'left',
    color: 'limegreen',
  }
});

